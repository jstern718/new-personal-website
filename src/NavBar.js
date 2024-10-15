import React from "react"
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    return (
        <nav className="NavBar navbar-dark bg-dark navbar-expand-lg navbar navbar-custom container-fluid justify-content-start">
            <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-text" : "navbar-text"}> Home </NavLink>
            <NavLink to="/Jobs" className="navbar-text"> Experience </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Projects </NavLink>
        </nav>);
  }

export default NavBar;







