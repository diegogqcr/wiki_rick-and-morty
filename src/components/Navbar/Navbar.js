import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="ubuntu fs-3 navbar-brand" to="/">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <style jsx>
            {`
            button[aria-expanded="false"] > .close{
              display: none;
            }
            button[aria-expanded="true"] > .open{
              display: none;
            }
            `}
          </style>

          <i className="fas fa-light fa-bars open text-dark"></i>
          <i className="fas fa-solid fa-times close text-dark"></i>

        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/">Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">Location</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar