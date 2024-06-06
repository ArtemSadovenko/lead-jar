import SidePanel from "../components/SidePanel";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"
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
