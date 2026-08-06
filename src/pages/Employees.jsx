import { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const employeeData = data.map((emp, index) => ({
          ...emp,
          department: ["IT", "HR", "Sales", "Finance"][index % 4],
          designation: "Software Engineer",
          status: index % 2 === 0 ? "Active" : "Inactive",
        }));

        setEmployees(employeeData);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch employees.");
        setLoading(false);
      });
  }, []);

  const deleteEmployee = (id) => {
    if (window.confirm("Delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (department === "All" || emp.department === department)
    );
  });

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Loading Employees...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="container">

      <h2 className="text-center mb-4">
        Employees
      </h2>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <select
        className="form-select mb-3"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
      </select>

      <h5 className="mb-4">
        Total Employees : {filteredEmployees.length}
      </h5>

      <div className="row">

        {filteredEmployees.length === 0 ? (
          <h3 className="text-danger">
            No Employees Found
          </h3>
        ) : (
          filteredEmployees.map((employee) => (
            <div className="col-md-6 col-lg-4" key={employee.id}>
              <EmployeeCard
                employee={employee}
                deleteEmployee={deleteEmployee}
              />
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Employees;