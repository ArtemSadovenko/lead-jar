import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SidePanel from "../components/SidePanel";
import SearchPanel from "../components/SearchPanel";
import TopBar from "../components/TopBar";
import TextField from "@mui/material/TextField";
import { Height } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


function AssistantPage() {
  const navigator = useNavigate();

  


  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          
          <TopBar />
          <div style={{margin: "10px 20px 10px 20px "}}>
            <Button sx={{
              color: "black",
              borderBottom: "solid black 1px",
              margin: "8px 16px 8px 16px "
            }} onClick={() =>{
                navigator("/dashboard/ai-assistant")
            }}>Ai Asistant</Button>
            <Button
            sx={{
              color: "black",
              borderBottom: "solid black 1px",
              margin: "8px 16px 8px 16px "
            }}  onClick={() =>{
                navigator("/dashboard/statistics")
            }}>Statistics</Button>
         </div>
          <h2>Get ideas how to improve your letter with A.I.</h2>

          <textarea
            placeholder="Enter cover letter link to get response from AI Assistant..."

            style={{
              borderRadius: "10px",
              borderColor: "white",
              width: "70vw",
              height: "50vh",
              resize: "none",
            }}
          />

          {/* <h2>Cover Letter Link</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "start-center",
            }}
          >
            <textarea
              placeholder="www.examlpe.com"
              style={{
                borderRadius: "10px",
                borderColor: "#B8BDC5",
                width: "25vw",
                height: "4vh",
                resize: "none",
                verticalAlign: "center",
              }}
            />
            <button
              style={{
                backgroundColor: "#A0C1B9",
                width: "90px",
                marginLeft: "20px",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Send
            </button>
          </div> */}
          <Button variant="contained" color="success" sx={{
            textTransform:"none",
            color:"white",
            backgroundColor: "#b8e2ab"
          }}>
            Sent
          </Button>
          <h1></h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AssistantPage;
