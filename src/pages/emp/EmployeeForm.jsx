import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmployeeForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const existing = location.state;
const [employee, setEmployee] = useState({
  empId: existing?.empId || "",
  firstName: existing?.firstName || "",
  lastName: existing?.lastName || "",
  email: existing?.email || "",
  mobile: existing?.mobile || "",
  alternateMobile: existing?.alternateMobile || "",
  gender: existing?.gender || "",
  dob: existing?.dob || "",
  department: existing?.department || "",
  designation: existing?.designation || "",
  joiningDate: existing?.joiningDate || "",
  salary: existing?.salary || "",
  employeeType: existing?.employeeType || "",
  leaveBalance: existing?.leaveBalance || 0,
  permanentAddress: existing?.permanentAddress || "",
  temporaryAddress: existing?.temporaryAddress || "",
  status: existing?.status || "Active",
});

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  let employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  // Duplicate Check (Only for New Employee)
  if (!existing) {
    const employeeExists = employees.some(
      (emp) =>
        emp.empId === employee.empId ||
        emp.email.toLowerCase() === employee.email.toLowerCase()
    );

    if (employeeExists) {
      alert(
        "This employee is already created. Please use a different Employee ID or Email."
      );
      return;
    }

    employees.push(employee);

    alert("Employee Added Successfully ✅");
  } else {
    // Edit Employee
    employees = employees.map((emp) =>
      emp.empId === existing.empId ? employee : emp
    );

    alert("Employee Updated Successfully ✅");
  }

  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

  navigate("/employee-master");
};
  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200">
        <div className="px-8 py-6 border-b border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">
            {existing ? "Edit Employee" : "Create New Employee"}
          </h1>
          <p className="text-slate-500 mt-2">
            Manage employee information and records.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div>
              <label className="block text-sm font-semibold mb-2">
                Employee ID
              </label>
              <input
                type="text"
                name="empId"
                value={employee.empId}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                placeholder="EMP001"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={employee.mobile}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
                required
              />
            </div>
              <div>
                  <label className="block text-sm font-semibold mb-2">
                    Alternate Number
                  </label>

                      <input
                         type="text"
                          name="alternateMobile"
                          value={employee.alternateMobile}
                           onChange={handleChange}
                            className="w-full border rounded-xl p-3"
                            placeholder="Alternate Number"
                              />
              </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={employee.gender}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={employee.dob}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Department
              </label>
              <select
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="">Select Department</option>
                <option>HR</option>
                <option>IT</option>
                <option>Finance</option>
                <option>Sales</option>
                <option>Operations</option>
              </select>
            </div>
<div>
  <label className="block text-sm font-semibold mb-2">
   Martial Status
  </label>

  <select
    name="MartialStatus"
    value={employee.MartialStatus}
    onChange={handleChange}
    className="w-full border rounded-xl p-3"
  >
    <option value="">Select Martial Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
  </select>
</div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Joining Date
              </label>
              <input
                type="date"
                name="joiningDate"
                value={employee.joiningDate}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Salary
              </label>
              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />
            </div>
            <div>
  <label className="block text-sm font-semibold mb-2">
    Leave Balance
  </label>

  <div className="flex items-center gap-2">

    <button
      type="button"
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() =>
        setEmployee({
          ...employee,
          leaveBalance: Math.max(
            0,
            Number(employee.leaveBalance || 0) - 1
          ),
        })
      }
    >
      -
    </button>

    <input
      type="number"
      name="leaveBalance"
      value={employee.leaveBalance}
      onChange={handleChange}
      className="w-full border rounded-xl p-3 text-center"
    />

    <button
      type="button"
      className="bg-green-500 text-white px-4 py-2 rounded"
      onClick={() =>
        setEmployee({
          ...employee,
          leaveBalance:
            Number(employee.leaveBalance || 0) + 1,
        })
      }
    >
      +
    </button>

  </div>
</div>
<div>
  <label className="block text-sm font-semibold mb-2">
    Employee Type
  </label>

  <select
    name="employeeType"
    value={employee.employeeType}
    onChange={handleChange}
    className="w-full border rounded-xl p-3"
  >
    <option value="">Select Employee Type</option>
    <option value="Permanent">Permanent</option>
    <option value="Temporary">Temporary</option>
  </select>
</div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Status
              </label>
              <select
                name="status"
                value={employee.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

<div className="mt-6">
  <label className="block text-sm font-semibold mb-2">
    Permanent Address
  </label>

  <textarea
    name="permanentAddress"
    value={employee.permanentAddress}
    onChange={handleChange}
    rows="4"
    className="w-full border rounded-xl p-3"
    placeholder="Enter Permanent Address"
  />
</div>
<div className="mt-6">
  <label className="block text-sm font-semibold mb-2">
    Temporary Address
  </label>

  <textarea
    name="temporaryAddress"
    value={employee.temporaryAddress}
    onChange={handleChange}
    rows="4"
    className="w-full border rounded-xl p-3"
    placeholder="Enter Temporary Address"
  />
</div>

        <div className="flex justify-end gap-3 mt-8">
     <button
       type="button"
        onClick={() => navigate("/employee-master")}
        className="px-6 py-3 rounded-xl border border-slate-300 font-semibold bg-white hover:bg-gray-100"
  >
     ← Back
  </button>

  <button
    type="submit"
    className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
  >
    {existing ? "Update Employee" : "Save Employee"}
  </button>
</div>
          
        </form>
      </div>
    </div>
  );
}