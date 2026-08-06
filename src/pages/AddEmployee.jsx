import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Phone Number should contain exactly 10 digits.");
      return;
    }

    alert("Employee Added Successfully!");

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      status: "Active",
    });
  };

  return (
    <div className="container">

      <h2 className="text-center mb-4">
        Add Employee
      </h2>

      <EmployeeForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />

    </div>
  );
}

export default AddEmployee;