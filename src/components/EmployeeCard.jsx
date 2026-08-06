import { Link } from "react-router-dom";

function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <div
      className="card mb-4 p-3"
      style={{
        border: "none",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
      }}
    >
      <h4 className="text-primary">{employee.name}</h4>

      <hr />

      <p><strong>Employee ID:</strong> {employee.id}</p>

      <p><strong>Department:</strong> {employee.department}</p>

      <p><strong>Designation:</strong> {employee.designation}</p>

      <p><strong>Email:</strong> {employee.email}</p>

      <p>
        <strong>Status:</strong>{" "}
        {employee.status === "Active" ? (
          <span className="badge bg-success">
            Active
          </span>
        ) : (
          <span className="badge bg-danger">
            Inactive
          </span>
        )}
      </p>

      <div className="d-flex justify-content-between mt-3">

        <Link
          to={`/employee/${employee.id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;