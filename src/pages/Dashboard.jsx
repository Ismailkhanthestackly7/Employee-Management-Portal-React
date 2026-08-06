import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        const emp = data.map((item, index) => ({
          ...item,
          department: ["IT", "HR", "Sales", "Finance"][index % 4],
          status: index % 2 === 0 ? "Active" : "Inactive",
        }));

        setEmployees(emp);

      });
  }, []);

  const totalEmployees = employees.length;

  const activeEmployees =
    employees.filter(emp => emp.status === "Active").length;

  const inactiveEmployees =
    employees.filter(emp => emp.status === "Inactive").length;

  const departments =
    [...new Set(employees.map(emp => emp.department))].length;

  return (
    <div className="container">

      <h2
        className="text-center mb-5"
        style={{ fontWeight: "bold" }}
      >
        Welcome to Employee Management Portal
      </h2>

      <div className="row g-4">

        <div className="col-md-3">
          <DashboardCard
            title="Total Employees"
            count={totalEmployees}
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Active Employees"
            count={activeEmployees}
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Inactive Employees"
            count={inactiveEmployees}
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Departments"
            count={departments}
          />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;