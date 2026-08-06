function EmployeeForm({
  formData,
  handleChange,
  handleSubmit,
  handleReset,
}) {
  return (
    <form onSubmit={handleSubmit}>

      <input
        className="form-control mb-3"
        type="number"
        name="id"
        placeholder="Employee ID"
        value={formData.id}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <input
        className="form-control mb-3"
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleChange}
        required
      />

      <select
        className="form-select mb-4"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button
        className="btn btn-success me-2"
        type="submit"
      >
        Add Employee
      </button>

      <button
        className="btn btn-secondary"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>

    </form>
  );
}

export default EmployeeForm;