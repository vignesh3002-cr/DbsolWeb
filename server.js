// ✅ IMPORTS (MUST BE FIRST)
import express from "express";
import cors from "cors";
import { sql, poolPromise } from "./db.js";

// ✅ CREATE APP (THIS WAS MISSING)
const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ LOGIN API
app.post("/api/login", async (req, res) => {
  const { empId, password } = req.body;

  try {
    const pool = await poolPromise;

    let query;

   if (empId.startsWith("EMP")) {
  query = `
    SELECT 'EMPLOYEE' AS role, *
    FROM EMPLOYEE1
    WHERE EmpId = @empId AND Password = @password
  `;
} else {
  query = `
    SELECT 'ADMIN' AS role, *
    FROM ADMIN1
    WHERE AdminId = @empId AND Password = @password
  `;
}

const result = await pool.request()
  .input("empId", sql.VarChar, empId)
  .input("password", sql.VarChar, password)
  .query(query);

    if (result.recordset.length > 0) {
      res.json({ success: true, user: result.recordset[0] });
    } else {
      res.status(401).json({ success: false, message: "Invalid ID or Password" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ APPLY LEAVE API
app.post("/api/apply-leave", async (req, res) => {
  const { empId, fromDate, toDate, reason } = req.body;

  try {
    const pool = await poolPromise;

    await pool.request()
      .input("empId", sql.VarChar, empId)
      .input("fromDate", sql.Date, fromDate)
      .input("toDate", sql.Date, toDate)
      .input("reason", sql.VarChar, reason)
      .query(`
        INSERT INTO LeaveRequests (EmpId, FromDate, ToDate, Reason)
        VALUES (@empId, @fromDate, @toDate, @reason)
      `);

    res.json({ message: "✅ Leave applied successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running",
    timestamp: new Date()
  });
});

// ✅ START SERVER (ALWAYS LAST)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
