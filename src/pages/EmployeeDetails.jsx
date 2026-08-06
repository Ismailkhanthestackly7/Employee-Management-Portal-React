import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEmployee({
          ...data,
          department: "IT",
          designation: "Software Engineer",
          status: Number(id) % 2 === 0 ? "Inactive" : "Active",
        });

        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container">

      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">
          Employee Details
        </h2>

        <p><strong>ID :</strong> {employee.id}</p>

        <p><strong>Name :</strong> {employee.name}</p>

        <p><strong>Email :</strong> {employee.email}</p>

        <p><strong>Phone :</strong> {employee.phone}</p>

        <p><strong>Department :</strong> {employee.department}</p>

        <p><strong>Designation :</strong> {employee.designation}</p>

        <p>
          <strong>Status :</strong>{" "}
          <span
            className={
              employee.status === "Active"
                ? "badge bg-success"
                : "badge bg-danger"
            }
          >
            {employee.status}
          </span>
        </p>

      </div>

    </div>
  );
}

export default EmployeeDetails;