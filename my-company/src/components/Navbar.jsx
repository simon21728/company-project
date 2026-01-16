import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "40px",
    color: "#333",
    fontWeight: "bold",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "left",
        gap: "80px",
        padding: "19px",
        backgroundColor: "#3333",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "#0D6EFD" : "#333",
          borderBottom: isActive ? "3px solid #0D6EFD" : "none",
        })}
      >
        Home
      </NavLink>

      <NavLink to="/about" 
      style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "#0D6EFD" : "#333",
          borderBottom: isActive ? "3px solid #0D6EFD" : "none",
        })}
      >
        About
      </NavLink>

      <NavLink to="/services" 
      style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "#0D6EFD" : "#333",
          borderBottom: isActive ? "3px solid #0D6EFD" : "none",
        })}
      >
        Services
      </NavLink>

      <NavLink to="/contact" 
      style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "#0D6EFD" : "#333",
          borderBottom: isActive ? "3px solid #0D6EFD" : "none",
        })}
      >
        Contact
      </NavLink>
      

      <NavLink to="/moreinfo" style={({ isActive }) => ({
        ...linkStyle,
        color: isActive ? "#0D6EFD" : "#333",
        borderBottom: isActive ? "3px solid #0D6EFD" : "none",
      })}>
        Moreinfo
      </NavLink>
    </nav>
  );
}

export default Navbar;
