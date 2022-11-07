import React, { useState } from "react";
import { signIn } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center "
      style={{ height: "80vh" }}
    >
      <form className="w-50 m-auto" onSubmit={handleSubmit}>
        <h3 className="mb-4 text-center text-danger">
          Please Fill The Form For Login{" "}
        </h3>
        <div className="mb-3">
          <label htmlFor="Inputusername" className="form-label">
            Username
          </label>
          <input
            type="text"
            required
            className="form-control"
            placeholder="Please Enter Username"
            id="Inputusername"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
            placeholder="Please Enter Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Please Enter Password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-danger w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
