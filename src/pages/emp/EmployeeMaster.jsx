import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash, FaPlusCircle  } from "react-icons/fa";
export default function EmployeeMaster() {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [employeeTypeFilter, setEmployeeTypeFilter] = useState("");
  const [empIdFilter, setEmpIdFilter] = useState("");
  const [employees, setEmployees] = useState(() => {
   
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  const handleDelete = (empId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedEmployees = employees.filter(
        (emp) => emp.empId !== empId
      );

      setEmployees(updatedEmployees);

      localStorage.setItem(
        "employees",
        JSON.stringify(updatedEmployees)
      );
    }
  };
  const filteredEmployees = employees.filter((emp) => {
  const fullName =
    `${emp.firstName || ""} ${emp.lastName || ""}`.toLowerCase();

  const matchesName =
    searchName === "" ||
    fullName.includes(searchName.toLowerCase());

  const matchesDepartment =
    departmentFilter === "" ||
    emp.department === departmentFilter;

  const matchesEmployeeType =
    employeeTypeFilter === "" ||
    emp.employeeType === employeeTypeFilter;

  const matchesEmpId =
  empIdFilter === "" ||
  emp.empId.toString() === empIdFilter;

 
return (
  matchesName &&
  matchesDepartment &&
  matchesEmployeeType &&
  matchesEmpId
);

});

const handleFilter = () => {
  console.log(filteredEmployees);
};

 return (
  <div className="bg-white rounded-2xl shadow-lg p-6">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold text-slate-900">
        Employee Master
      </h1>

      <div className="flex gap-4">
       
<button
  onClick={() => navigate("/admin-dashboard")}
>
  ← Back
</button>


        <button
          onClick={() => navigate("/employee-form")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <FaPlusCircle />
          Create New Employee
        </button>
      </div>
    </div>

    {/* Filter Section */}
    <div className="border rounded-lg overflow-hidden mb-6">
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
        <h2 className="font-semibold">
          🔍 Filter Employees
        </h2>

        <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">
          Total Employees: {filteredEmployees.length}
        </span>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          value={employeeTypeFilter}
          onChange={(e) => setEmployeeTypeFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Employee Types</option>
          <option value="Permanent">Permanent</option>
          <option value="Temporary">Temporary</option>
        </select>

      <input
  type="number"
  value={empIdFilter}
  onChange={(e) => setEmpIdFilter(e.target.value)}
  className="border rounded px-3 py-2"
/>
<button
 
  className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2"
>
  Filter
</button>

      </div>
    </div>

    {/* Employee Table */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-slate-200">
            <th className="border p-3">Emp ID</th>
            <th className="border p-3">Employee Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Mobile</th>
            <th className="border p-3">Alternate No</th>
            <th className="border p-3">Department</th>
            <th className="border p-3">Employee Type</th>
            <th className="border p-3">Designation</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Leave Balance</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>

        <tbody>
         
         {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (

              <tr key={emp.empId}>
                <td className="border p-3">{emp.empId}</td>

                <td className="border p-3">
                  {emp.firstName} {emp.lastName}
                </td>

                <td className="border p-3">{emp.email}</td>

                <td className="border p-3">{emp.mobile}</td>

                <td className="border p-3">
                  {emp.alternateMobile}
                </td>

                <td className="border p-3">
                  {emp.department}
                </td>

                <td className="border p-3">
                  {emp.employeeType}
                </td>

                <td className="border p-3">
                  {emp.designation}
                </td>

                <td className="border p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="border p-3 text-center">
                  {emp.leaveBalance}
                </td>

                <td className="border p-3">
                  <div className="flex gap-2 justify-center">

                    <button
                      title="View"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded"
                      onClick={() =>
                        navigate("/employee-details", {
                          state: emp,
                        })
                      }
                    >
                      <FaEye size={14} />
                    </button>

                    <button
                      title="Edit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
                      onClick={() =>
                        navigate("/employee-form", {
                          state: emp,
                        })
                      }
                    >
                      <FaEdit size={14} />
                    </button>

                    <button
                      title="Delete"
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                      onClick={() => handleDelete(emp.empId)}
                    >
                      <FaTrash size={14} />
                    </button>

                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="11"
                className="text-center p-6 text-gray-500"
              >
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  </div>
);
}