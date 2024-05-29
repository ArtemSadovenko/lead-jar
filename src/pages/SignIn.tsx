import React from "react";
import { Button, InputBase, TextField, Typography } from "@mui/material";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function SingIn() {
  const nav = useNavigate();

  const routeToDash = () => {
    nav("/dashboard");
  };

  return (
    <div className="root">
      <div className="authForm">
        <h1>Sign In</h1>

        <br />

        <TextField
          id="textField"
          label="Email"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#f5f5fa",
            margin: "10px 0px 4px 0px",
          }}
          placeholder="Enter email"
        ></TextField>

        <br />
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
        
        {/* <Alert sx={{marginTop: "20px", width: "200px"}}  severity="error">Please enter a valid email address</Alert> */}
        <Button
          onClick={routeToDash}
          variant="contained"
          sx={{
            m: "30px 0px 20px 0px",
            backgroundColor: "#706993",
            width: "220px",
          }}
        >
          Sign In
        </Button>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Dont have an account?&nbsp;&nbsp; </p>
          <Link to={"/login/sign-up"}>
            <p> Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
