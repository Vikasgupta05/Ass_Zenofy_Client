import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [signfirstName, setSignfirstName] = useState("");
  const [signLastName, setSignLastName] = useState("");
  const [signData, setSignData] = useState("");
  const [signUpInError, setsignUpInError] = useState("");

  const SignUpdata = {
    firstName: signfirstName,
    lastName: signLastName,
    email: signEmail,
    password: signPassword,
  };

  const SignUpHandelSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/register`, SignUpdata)
      .then(function (res) {
        setSignData(res.data.status);
        setsignUpInError(res.data.error);
      });
  };
  if (signData == "ok") {
    navigate("/logIn");
  }

  return (
    <div className="container loginDiv mt-5">
      <form  onSubmit={SignUpHandelSubmit}>
        <div >
          <h3 style={{textAlign:"center"}} >Sign up</h3>
        
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder="Jane Doe"
              value={signfirstName}
              onChange={(e) => {
                setSignfirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="string"
              className="form-control mt-1"
              placeholder=" Doe"
              value={signLastName}
              onChange={(e) => {
                setSignLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={signEmail}
              onChange={(e) => {
                setSignEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={signPassword}
              onChange={(e) => {
                setSignPassword(e.target.value);
              }}
            />
          </div>
          <p style={{ fontSize: "15px", padding: "10px", color: "red" }}>
            {signUpInError}
          </p>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div className="mt-3" >
            Already registered?{" "}
            <Link style={{ textDecoration: "none" }} to={"/logIn"}>
              <span className="link-primary">Sign In</span>
            </Link>
          </div>
          <p className="mt-2" >
            Forgot <a style={{color :"black"}} href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
