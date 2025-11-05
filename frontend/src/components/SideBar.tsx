import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = {
    display: "block",
    padding: "0.75rem 1rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ padding: "1rem" }}>StudentSys</h2>
      <NavLink to="/" style={linkStyle}>🏠 Dashboard</NavLink>
      <NavLink to="/students" style={linkStyle}>🎓 Students</NavLink>
      <NavLink to="/about" style={linkStyle}>ℹ️ About</NavLink>
    </aside>
  );
}
