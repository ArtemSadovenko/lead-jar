import React from "react";
import { Button, InputBase, TextField, Typography } from "@mui/material";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Login from "../domain/Login";
import { useEffect, useState } from "react";
import {UsersDatabase, AuthenticatedUserDatabase} from "../backend/database";
import {Role} from "../backend/Role"
import useRunOnce from "../hooks/userRunOnce";

function SingIn() {
  const nav = useNavigate();

  const users = new UsersDatabase()
  const loginSystem = new Login(new UsersDatabase(), new AuthenticatedUserDatabase())

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const routeToDash = () => {
    nav("/dashboard");
  };

  // useRunOnce({
  //   fn: () => {
  //     users.create({
  //       email:"ivan.vachilia@gmail.com",
  //       password:"asdf;lkj",
  //       role:Role.Admin
  //     })
  //   }
  // }, []);

  const handleLogin = () => {
    const result = loginSystem.login(email, password);
    if (typeof result === "string") {
      setError(result);
    } else {
      routeToDash();
    }
  };

  return (
    <div className="root">
      <div className="authForm">
        <h1>Sign In</h1>

        <br />

        <TextField
          id="textField"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#f5f5fa",
            margin: "10px 0px 4px 0px",
          }}
          placeholder="Enter email"
        />
        <TextField
          id="pass"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: "#f5f5fa" }}
          placeholder="Enter Password"
          type="password"
        />
                {error && (
          <Alert sx={{ marginTop: "20px", width: "200px" }} severity="error">
            {error}
          </Alert>
        )}
        {/* <Alert sx={{marginTop: "20px", width: "200px"}}  severity="error">Please enter a valid email address</Alert> */}
        <Button
          onClick={handleLogin}
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
            <p> Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
