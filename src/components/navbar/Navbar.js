import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { logOut } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <span type="button" onClick={() => logOut(navigate)}>
                LOGOUT
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
