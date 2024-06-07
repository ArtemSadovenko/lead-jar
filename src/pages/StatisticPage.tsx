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
import {
  LeadResponse,
  LeadStatus,
  LeadStatusBackgroundColors,
  LeadStatusUINames,
  stringToLeadStatus as stringToLeadStatus,
} from "../network/Leads";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

function StatisticPage() {
  const navigator = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<LeadResponse[]>([]);
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

  const getStatusCounts = () => {
    const statusCounts: { [status: string]: number } = {};

    leads.forEach((lead) => {
      const status = lead.status;
      if (status in statusCounts) {
        statusCounts[status]++;
      } else {
        statusCounts[status] = 1;
      }
    });
    return statusCounts;
  };

  const statusCounts = getStatusCounts();
  const pieChartData = {
    labels: Object.keys(statusCounts).map(
      (status) => LeadStatusUINames[stringToLeadStatus(status)]
    ),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          LeadStatusBackgroundColors[LeadStatus.PROPOSAL_SENT],
          LeadStatusBackgroundColors[LeadStatus.VIEWED],
          LeadStatusBackgroundColors[LeadStatus.CHATTING],
          LeadStatusBackgroundColors[LeadStatus.IN_PROGRESS],
        ],
        hoverBackgroundColor: [
          LeadStatusBackgroundColors[LeadStatus.PROPOSAL_SENT],
          LeadStatusBackgroundColors[LeadStatus.VIEWED],
          LeadStatusBackgroundColors[LeadStatus.CHATTING],
          LeadStatusBackgroundColors[LeadStatus.IN_PROGRESS],
        ],
      },
    ],
  };

  const getStatusTotalSpend = () => {
    const statusTotalSpend: { [status: string]: number } = {};

    leads.forEach((lead) => {
      const { status, totalSpend } = lead;
      if (status in statusTotalSpend) {
        statusTotalSpend[status] += totalSpend;
      } else {
        statusTotalSpend[status] = totalSpend;
      }
    });

    return statusTotalSpend;
  };

  const statusTotalSpend = getStatusTotalSpend();

  const barChartData = {
    labels: Object.keys(statusTotalSpend).map(
      (status) => LeadStatusUINames[stringToLeadStatus(status)]
    ),
    datasets: [
      {
        label: "Earned money by Status",
        data: Object.values(statusTotalSpend),
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
          <div style={{ margin: "10px 20px 10px 20px " }}>
            <Button
              sx={{
                color: "black",
                borderBottom: "solid black 1px",
                margin: "8px 16px 8px 16px ",
              }}
              onClick={() => {
                navigator("/dashboard/ai-assistant");
              }}
            >
              Ai Asistant
            </Button>
            <Button
              sx={{
                color: "black",
                borderBottom: "solid black 1px",
                margin: "8px 16px 8px 16px ",
              }}
              onClick={() => {
                navigator("/dashboard/statistics");
              }}
            >
              Statistics
            </Button>
          </div>
          <Container sx={{ display: "flex" }}>
            <div
              style={{
                width: "400px",
                height: "300px",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h2>Leads count by Status</h2>
              <Pie width={50} height={50} data={pieChartData} />
            </div>

            <div
              style={{
                width: "400px",
                height: "300px",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
              }}
            >
              <h2>Leads by total Spend</h2>
              <Bar data={barChartData} />
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StatisticPage;
