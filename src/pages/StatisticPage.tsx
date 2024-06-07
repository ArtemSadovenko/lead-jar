import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import { ContentCopy } from "@mui/icons-material";
import { useAuth } from "../network/AuthProvider";
import { useNavigate } from "react-router-dom";
import Network from "../network/network";
import { LeadRequest, LeadResponse } from "../network/Leads";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

function StatisticPage() {
    const navigator = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<LeadResponse[]>([]);
  
  const [userName, setUserName] = useState<string>("");

  const network = new Network();

  const { token } = useAuth(); // Get the authentication token from context

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const network = new Network();
        const leads_ = await network.getAllLeads();
        setLeads(leads_);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  console.log(leads);

  const getStatusCounts = () => {
    const statusCounts: { [status: string]: number } = {};
    leads.forEach((lead) => {
      if (lead.status in statusCounts) {
        statusCounts[lead.status]++;
      } else {
        statusCounts[lead.status] = 1;
      }
    });
    return statusCounts;
  };

  const statusCounts = getStatusCounts();

  const pieChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#36A2EB",
        ],
      },
    ],
  };

  const barChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Status Counts",
        data: Object.values(statusCounts),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

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
          <Container sx={{ display: "flex" }}>


            <div
              style={{
                width: "400px",
                height: "400px",
                margin: "10px 10px 10px 10px ",
              }}
            >
              <h2>Status</h2>
              <Pie width={50} height={50} data={pieChartData} />
            </div>

            <div
              style={{
                width: "400px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                margin: "10px 10px 10px 10px ",
              }}
            >
              <h2>Status</h2>
              <Bar data={barChartData} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StatisticPage;
