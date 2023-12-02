import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCharContext } from "../Context/Context";

const Navbar = () => {
  const { state, dispatch } = useCharContext();

  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const containerStyle = {
    width: "100%",
    backgroundColor: state.theme ? "#333" : "#f4f4f4",
    color: state.theme ? "#fff" : "#333",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: state.theme ? "#fff" : "#333",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: state.theme ? "#fff" : "#333",
    color: state.theme ? "#333" : "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoDStyle = {
    color: "red",
    marginRight: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={brandStyle}>
        <span style={logoDStyle}>D</span>H Odonto
      </div>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/favs" style={linkStyle}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleThemeChange} style={buttonStyle}>
        Cambiar tema
      </button>
    </div>
  );
};

export default Navbar;
