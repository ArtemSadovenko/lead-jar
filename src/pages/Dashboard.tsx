import SidePanel from "../components/SidePanel";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AuthenticatedUserDatabase,
  UsersDatabase,
  LeadsDatabase,
} from "../backend/database";
import Login from "../domain/Login";

import useRunOnce from "../hooks/userRunOnce";
import React from "react";
import "./Home.css";
import AiAssistantIcon from "../statis/icons/AiAssistantIcon";
import BlogIcon from "../statis/icons/BlogIcon";
import TeamTreeIcon from "../statis/icons/LeadsIcon";
import TeamIcon from "../statis/icons/TeamIcon";
import TemplateIcon from "../statis/icons/TemplateIcon";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigator = useNavigate();
  const lsystem = new Login(
    new UsersDatabase(),
    new AuthenticatedUserDatabase()
  );

  useRunOnce(
    {
      fn: () => {
        const auth = lsystem.isAuthenticated();
        if (auth === null) navigator("/login");
        else navigator("/dashboard/leads");
      },
    },
    []
  );

  console.log("Dash");
  return (
    <Container maxWidth="lg" style={{ paddingLeft: 0 }}>
      <Grid container spacing={3} sx={{ paddi: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
          <h1>dash</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
