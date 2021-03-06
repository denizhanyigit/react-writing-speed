import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-2">
  <NavLink className="navbar-brand" to="/">YazTest</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <NavLink exact className="nav-link" to="/">Anasayfa </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="results">Sonuçlarım</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="challanges">Metinler</NavLink>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;