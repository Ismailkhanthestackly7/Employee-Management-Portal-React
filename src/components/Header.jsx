function Header() {
  return (
    <header
      style={{
        background: "#1E3A8A",
        color: "white",
        padding: "18px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      <h2 style={{ margin: 0 }}>
        Employee Management Portal
      </h2>

      <p style={{ marginTop: "8px", marginBottom: 0 }}>
        React Employee Management System
      </p>
    </header>
  );
}

export default Header;