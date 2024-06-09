import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import NavButton from "../components/NavButton";
import { Height } from "@mui/icons-material";
import "./BlogPage.css"


function BlogPage() {
  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={0} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />
          <div className="content" style={{ margin: "36px 12px 36px 12px " }}>
            <Grid container spacing={0}>
              <Grid item md={6}>
                <a href="https://dribbble.com/jobs">
                <div style={{ margin: "8px 16px 8px 16px " }}>
                  <img
                    style={{ height: "230px" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <h4>UX Review presintations</h4>
                  <p>
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
                </a>
              </Grid>
              <Grid item md={6}>
                <a href="https://medium.com/front-end-weekly/building-your-api-stack-f51f9a549c4c">
                <div style={{ display: "flex", margin: "8px 16px 8px 16px " }}>
                  <img
                    style={{ height: "140px", verticalAlign: "middle" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <div style={{ padding: "0px 12px 0px 12px " }}>
                    <h4 style={{ margin: "0px 0px 0px 0px " }}>
                      Building your API Stack
                    </h4>
                    <p>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </p>
                  </div>
                </div>
                </a>

                <a href="https://knotch.com/migrating-to-linear-101/">
                <div style={{ display: "flex", margin: "32px 16px 8px 16px " }}>
                  <img
                    style={{ height: "140px" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <div style={{ padding: "0px 12px 0px 12px " }}>
                    <h4 style={{ margin: "0px 0px 0px 0px " }}>
                      Migrating to Linear 101
                    </h4>
                    <p>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </p>
                  </div>
                </div>
                </a>
              </Grid>




              
              <Grid item md={6}>
                <div style={{ margin: "8px 16px 8px 16px " }}>
                  <img
                    style={{ height: "230px" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <h4>UX Review presintations</h4>
                  <p>
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
              </Grid>
              <Grid item md={6}>
                <div style={{ display: "flex", margin: "8px 16px 8px 16px " }}>
                  <img
                    style={{ height: "140px", verticalAlign: "middle" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <div style={{ padding: "0px 12px 0px 12px " }}>
                    <h4 style={{ margin: "0px 0px 0px 0px " }}>
                      Building your API Stack
                    </h4>
                    <p>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and manag...
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", margin: "32px 16px 8px 16px " }}>
                  <img
                    style={{ height: "140px" }}
                    title="draw-img"
                    src={
                      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  ></img>
                  <div style={{ padding: "0px 12px 0px 12px " }}>
                    <h4 style={{ margin: "0px 0px 0px 0px " }}>
                      Migrating to Linear 101
                    </h4>
                    <p>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get...
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
