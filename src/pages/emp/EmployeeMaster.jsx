import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPlusCircle,
} from "react-icons/fa";

export default function EmployeeMaster() {
  const navigate = useNavigate();

  // =====================================================
  // EMPLOYEE DATA
  // =====================================================
  const [employees, setEmployees] = useState(() => {
    try {
      const savedEmployees = localStorage.getItem("employees");

      if (!savedEmployees) {
        return [];
      }

      const parsedEmployees = JSON.parse(savedEmployees);

      return Array.isArray(parsedEmployees)
        ? parsedEmployees
        : [];
    } catch (error) {
      console.error(
        "Error loading employees:",
        error
      );

      return [];
    }
  });

  // =====================================================
  // FILTER INPUT VALUES
  // =====================================================
  const [searchName, setSearchName] = useState("");
  const [departmentFilter, setDepartmentFilter] =
    useState("");
  const [employeeTypeFilter, setEmployeeTypeFilter] =
    useState("");
  const [empIdFilter, setEmpIdFilter] = useState("");

  // =====================================================
  // APPLIED FILTERS
  // =====================================================
  const [appliedFilters, setAppliedFilters] = useState({
    searchName: "",
    department: "",
    employeeType: "",
    empId: "",
  });

  // =====================================================
  // SAVE EMPLOYEES
  // =====================================================
  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  // =====================================================
  // APPLY FILTER
  // =====================================================
  const handleFilter = () => {
    setAppliedFilters({
      searchName: searchName.trim(),
      department: departmentFilter,
      employeeType: employeeTypeFilter,
      empId: empIdFilter.trim(),
    });
  };

  // =====================================================
  // CLEAR FILTER
  // =====================================================
  const handleClearFilter = () => {
    // Clear input fields
    setSearchName("");
    setDepartmentFilter("");
    setEmployeeTypeFilter("");
    setEmpIdFilter("");

    // Clear applied filters
    setAppliedFilters({
      searchName: "",
      department: "",
      employeeType: "",
      empId: "",
    });
  };

  // =====================================================
  // DELETE EMPLOYEE
  // =====================================================
  const handleDelete = (empId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    const updatedEmployees = employees.filter(
      (emp) =>
        String(emp.empId) !== String(empId)
    );

    setEmployees(updatedEmployees);
  };

  // =====================================================
  // FILTER EMPLOYEES
  // =====================================================
  const filteredEmployees = employees.filter((emp) => {
    // -----------------------------------------------
    // FULL NAME
    // -----------------------------------------------
    const fullName =
      `${emp.firstName || ""} ${
        emp.lastName || ""
      }`
        .trim()
        .toLowerCase();

    // -----------------------------------------------
    // NAME FILTER
    // -----------------------------------------------
    const matchesName =
      appliedFilters.searchName === "" ||
      fullName.includes(
        appliedFilters.searchName.toLowerCase()
      );

    // -----------------------------------------------
    // DEPARTMENT FILTER
    // -----------------------------------------------
    const matchesDepartment =
      appliedFilters.department === "" ||
      String(emp.department || "") ===
        String(appliedFilters.department);

    // -----------------------------------------------
    // EMPLOYEE TYPE FILTER
    // -----------------------------------------------
    const matchesEmployeeType =
      appliedFilters.employeeType === "" ||
      String(emp.employeeType || "") ===
        String(appliedFilters.employeeType);

    // -----------------------------------------------
    // EMPLOYEE ID FILTER
    // -----------------------------------------------
    const matchesEmpId =
      appliedFilters.empId === "" ||
      String(emp.empId || "") ===
        String(appliedFilters.empId);

    return (
      matchesName &&
      matchesDepartment &&
      matchesEmployeeType &&
      matchesEmpId
    );
  });

  // =====================================================
  // CHECK WHETHER A FILTER IS ACTIVE
  // =====================================================
  const isFilterApplied =
    appliedFilters.searchName !== "" ||
    appliedFilters.department !== "" ||
    appliedFilters.employeeType !== "" ||
    appliedFilters.empId !== "";

  // =====================================================
  // RENDER
  // =====================================================
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* =================================================
          HEADER
      ================================================= */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold text-slate-900">
          Employee Master
        </h1>

        <div className="flex gap-4">

          {/* BACK */}
          <button
            onClick={() =>
              navigate("/admin-dashboard")
            }
            className="px-4 py-2"
          >
            ← Back
          </button>

          {/* CREATE NEW EMPLOYEE */}
          <button
            onClick={() =>
              navigate("/employee-form")
            }
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <FaPlusCircle />
            Create New Employee
          </button>

        </div>
      </div>

      {/* =================================================
          FILTER SECTION
      ================================================= */}
      <div className="border rounded-lg overflow-hidden mb-6">

        {/* FILTER HEADER */}
        <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">

          <h2 className="font-semibold">
            🔍 Filter Employees
          </h2>

          {/* IMPORTANT:
              This is TOTAL employees.
              It does NOT change when filtering.
          */}
          <span className="bg-white text-black px-3 py-1 rounded text-xs font-medium">
            Total Employees: {employees.length}
          </span>

        </div>

        {/* FILTER INPUTS */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) =>
              setSearchName(e.target.value)
            }
            className="border rounded px-3 py-2"
          />

          {/* DEPARTMENT */}
          <select
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              All Departments
            </option>

            <option value="IT">
              IT
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Finance">
              Finance
            </option>
          </select>

          {/* EMPLOYEE TYPE */}
          <select
            value={employeeTypeFilter}
            onChange={(e) =>
              setEmployeeTypeFilter(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              All Employee Types
            </option>

            <option value="Permanent">
              Permanent
            </option>

            <option value="Temporary">
              Temporary
            </option>
          </select>

          {/* EMPLOYEE ID */}
          <input
            type="text"
            placeholder="Search by Emp ID"
            value={empIdFilter}
            onChange={(e) =>
              setEmpIdFilter(e.target.value)
            }
            className="border rounded px-3 py-2"
          />

          {/* BUTTONS */}
          <div className="flex gap-2">

            <button
              onClick={handleFilter}
              className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2 flex-1"
            >
              Filter
            </button>

            <button
              onClick={handleClearFilter}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2"
            >
              Clear
            </button>

          </div>

        </div>
      </div>

      {/* =================================================
          RESULT INFORMATION
      ================================================= */}
      <div className="mb-3 text-sm text-gray-600">

        {isFilterApplied ? (
          <>
            Showing{" "}
            <span className="font-semibold">
              {filteredEmployees.length}
            </span>{" "}
            matching employee
            {filteredEmployees.length !== 1
              ? "s"
              : ""}
          </>
        ) : (
          <>
            Showing{" "}
            <span className="font-semibold">
              {employees.length}
            </span>{" "}
            employee
            {employees.length !== 1
              ? "s"
              : ""}
          </>
        )}

      </div>

      {/* =================================================
          EMPLOYEE TABLE
      ================================================= */}
      <div className="overflow-x-auto">

        <table className="w-full border border-gray-300">

          {/* TABLE HEADER */}
          <thead>
            <tr className="bg-slate-200">

              <th className="border p-3">
                Emp ID
              </th>

              <th className="border p-3">
                Employee Name
              </th>

              <th className="border p-3">
                Email
              </th>

              <th className="border p-3">
                Mobile
              </th>

              <th className="border p-3">
                Alternate No
              </th>

              <th className="border p-3">
                Department
              </th>

              <th className="border p-3">
                Employee Type
              </th>

              <th className="border p-3">
                Designation
              </th>

              <th className="border p-3">
                Status
              </th>

              <th className="border p-3">
                Leave Balance
              </th>

              <th className="border p-3">
                Action
              </th>

            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>

            {filteredEmployees.length > 0 ? (

              filteredEmployees.map((emp) => (

                <tr key={emp.empId}>

                  {/* EMP ID */}
                  <td className="border p-3">
                    {emp.empId}
                  </td>

                  {/* NAME */}
                  <td className="border p-3">
                    {emp.firstName || ""}{" "}
                    {emp.lastName || ""}
                  </td>

                  {/* EMAIL */}
                  <td className="border p-3">
                    {emp.email || "-"}
                  </td>

                  {/* MOBILE */}
                  <td className="border p-3">
                    {emp.mobile || "-"}
                  </td>

                  {/* ALTERNATE MOBILE */}
                  <td className="border p-3">
                    {emp.alternateMobile || "-"}
                  </td>

                  {/* DEPARTMENT */}
                  <td className="border p-3">
                    {emp.department || "-"}
                  </td>

                  {/* EMPLOYEE TYPE */}
                  <td className="border p-3">
                    {emp.employeeType || "-"}
                  </td>

                  {/* DESIGNATION */}
                  <td className="border p-3">
                    {emp.designation || "-"}
                  </td>

                  {/* STATUS */}
                  <td className="border p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.status || "Inactive"}
                    </span>

                  </td>

                  {/* LEAVE BALANCE */}
                  <td className="border p-3 text-center">
                    {emp.leaveBalance ?? 0}
                  </td>

                  {/* ACTION */}
                  <td className="border p-3">

                    <div className="flex gap-2 justify-center">

                      {/* VIEW */}
                      <button
                        title="View"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded"
                        onClick={() =>
                          navigate(
                            "/employee-details",
                            {
                              state: emp,
                            }
                          )
                        }
                      >
                        <FaEye size={14} />
                      </button>

                      {/* EDIT */}
                      <button
                        title="Edit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
                        onClick={() =>
                          navigate(
                            "/employee-form",
                            {
                              state: emp,
                            }
                          )
                        }
                      >
                        <FaEdit size={14} />
                      </button>

                      {/* DELETE */}
                      <button
                        title="Delete"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                        onClick={() =>
                          handleDelete(emp.empId)
                        }
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
                  {isFilterApplied
                    ? "No Employees Found"
                    : "No Employees Available"}
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}