import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { logOut } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

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
            <div className="d-inline">
              {currentUser ? (
                <>
                  <h5 className="mb-0 text-white bg-secondary border-radius rounded-4 p-2 text-capitalize d-inline">
                    welcome {currentUser?.displayName}
                  </h5>
                  <li>
                    <span type="button" onClick={() => logOut(navigate)}>
                      LOGOUT
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
