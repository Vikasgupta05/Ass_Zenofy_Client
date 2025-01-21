import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logpassword, setLogpassword] = useState("");
  const [logData, setlogData] = useState("");
  const [logInError, setlogInError] = useState("");
  const navigate = useNavigate();

  const LogIndata = {
    email: logEmail,
    password: logpassword,
  };

  const LogInHandelSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2345/login", LogIndata).then(function (res) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user);
        setlogData(res.data.token);
        setlogInError(res.data.error);
      });
  };

  if (logData) {
    navigate("/");
  }

  return (
    <div   className="loginDiv Auth-form-container">
      <form  onSubmit={LogInHandelSubmit}>
        <div>
          <h3 style={{textAlign : "center"}} >Sign In</h3>
   
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={logEmail}
              onChange={(e) => {
                setLogEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={logpassword}
              onChange={(e) => {
                setLogpassword(e.target.value);
              }}
            />
          </div>

          <p style={{ fontSize: "15px", padding: "10px", color: "red" }}>
            {logInError}
          </p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="mt-4" >
            Not registered yet?{" "}
            <Link style={{ textDecoration: "none" }} to={"/signUp"}>
              <span className="link-primary">Sign Up</span>
            </Link>
          </div>
          <p className="mt-2">
            Forgot <a style={{color :"black"}} href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
