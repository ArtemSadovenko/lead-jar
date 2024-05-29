import React from "react";
import { InputBase } from "@mui/material";
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
      <h2>Sign Up To</h2>
    <h1>Lead Jar</h1>

        <br />
        <InputBase
          sx={{
            width: "17vw",
            height: "6vh",
            border: "solid 1px",
            borderRadius: "10px",
            padding: "0px 5px 0px 10px",
            backgroundColor: "#f5f5fa",
            margin: "10px 0px 4px 0px",
          }}
          placeholder="Email"
        ></InputBase>
        <br />
        <InputBase
          type="password"
          sx={{
            width: "17vw",
            height: "6vh",
            border: "solid 1px",
            borderRadius: "10px",
            padding: "0px 5px 0px 10px",
            backgroundColor: "#f5f5fa",

            margin: "5px 0px 15px 0px",
          }}
          placeholder="Password"
        ></InputBase>

        <InputBase
          type="password"
          sx={{
            width: "17vw",
            height: "6vh",
            border: "solid 1px",
            borderRadius: "10px",
            padding: "0px 5px 0px 10px",
            backgroundColor: "#f5f5fa",

            margin: "5px 0px 15px 0px",
          }}
          placeholder="Repeat Password"
        ></InputBase>

        <button
          onClick={routeToDash}
          style={{
            width: "17vw",
            height: "6vh",
            border: "solid 1px",
            borderRadius: "10px",
            margin: "10px 0px 10px 0px",
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SignUp;
