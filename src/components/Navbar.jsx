import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "#111827",
        padding: "12px 20px"
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          EMP
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link text-white" to="/">
            Dashboard
          </Link>

          <Link className="nav-link text-white" to="/employees">
            Employees
          </Link>

          <Link className="nav-link text-white" to="/add-employee">
            Add Employee
          </Link>

          <Link className="nav-link text-white" to="/about">
            About
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;