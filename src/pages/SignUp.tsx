import React from "react";
import { InputBase, Button, TextField, Alert } from "@mui/material";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const nav = useNavigate();

  const routeToDash = () => {
    nav("/dashboard");
  };

  return (
    <div className="root">
      <div className="authForm">
        <h1>Sign Up</h1>

        <TextField
          id="textField"
          label="Email"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#f5f5fa",
            margin: "10px 0px 10px 0px",
          }}
          placeholder="Enter email"
        ></TextField>

        <TextField
          id="pass"
          label="Password"
          itemType="password"
          sx={{
            backgroundColor: "#f5f5fa",
          }}
          placeholder="Enter Password"
          type="password"
        ></TextField>

        <TextField
          id="pass"
          label="Confirm Password"
          itemType="password"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#f5f5fa",
            margin: "10px 0px 10px 0px"
          }}
          placeholder="Enter Password"
          type="password"
        ></TextField>


{/* <Alert sx={{marginTop: "20px", width: "200px"}}  severity="error">Passwords should match</Alert> */}
        

        <Button
          variant="contained"
          onClick={routeToDash}
          sx={{
            m: "30px 0px 20px 0px",
            backgroundColor: "#706993",
            width: "220px",
          }}
        >
          Sign Up
        </Button>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Already have an account?&nbsp;&nbsp; </p>
          <Link to={"/login/sign-up"}>
            <p> Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
