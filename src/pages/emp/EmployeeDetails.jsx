import { useLocation, useNavigate } from "react-router-dom";

export default function EmployeeDetails() {
  const navigate = useNavigate();
  const { state: employee } = useLocation();

  if (!employee) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">
          Employee Details Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            Employee Details
          </h2>

          <button
            onClick={() => navigate("/employee-master")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            ← Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold text-gray-600">
              Employee ID
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.empId}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Employee Name
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.firstName} {employee.lastName}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Email
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.email}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Mobile
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.mobile}
            </p>
          </div>
          
<div>
  <label className="font-semibold text-gray-600">
    Alternate Number
  </label>
  <p className="border rounded p-2 mt-1">
    {employee.alternateMobile}
  </p>
</div>


          <div>
            <label className="font-semibold text-gray-600">
              Department
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.department}
            </p>
          </div>

<div>
  <label className="font-semibold text-gray-600">
    Employee Type
  </label>
  <p className="border rounded p-2 mt-1">
    {employee.employeeType}
  </p>
</div>

          <div>
            <label className="font-semibold text-gray-600">
              Designation
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.designation}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Status
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.status}
            </p>
          </div>

<div>
  <label className="font-semibold text-gray-600">
    Leave Balance
  </label>
  <p className="border rounded p-2 mt-1">
    {employee.leaveBalance}
  </p>
</div>

          <div>
            <label className="font-semibold text-gray-600">
              Gender
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.gender}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Date of Birth
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.dob}
            </p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">
              Joining Date
            </label>
            <p className="border rounded p-2 mt-1">
              {employee.joiningDate}
            </p>
          </div>

    <div className="md:col-span-2">
  <label className="font-semibold text-gray-600">
    Permanent Address
  </label>
  <p className="border rounded p-2 mt-1">
    {employee.permanentAddress}
  </p>
</div>

<div className="md:col-span-2">
  <label className="font-semibold text-gray-600">
    Temporary Address
  </label>
  <p className="border rounded p-2 mt-1">
    {employee.temporaryAddress}
  </p>
</div>

        </div>

      </div>
    </div>
  );
}