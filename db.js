import sql from "mssql";

const dbConfig = {
  user: "sa",
  password: "Aaradhya@123",

  server: "localhost",
  PORT: 1433,

  database: "DBSOL",

  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log("✅ Connected to SQL Server");
    return pool;
  })
  .catch(err => {
    console.log("❌ DB Connection Failed:");
    console.log(err);
  });

export { sql, poolPromise };