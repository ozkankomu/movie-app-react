import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Live Studio </span> Movies
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
