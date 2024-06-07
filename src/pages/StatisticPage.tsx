import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import { ContentCopy } from "@mui/icons-material";
import { useAuth } from "../network/AuthProvider";
import { useNavigate } from "react-router-dom";
import Network from "../network/network";
import { LeadRequest, LeadResponse } from "../network/Leads";

function StatisticPage(){
    const [isLoading, setIsLoading] = useState(false);
  const [newList, setNewList] = useState<LeadResponse[]>([]);

  const [userName, setUserName] = useState<string>("");

  const network = new Network();

  const { token } = useAuth(); // Get the authentication token from context

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const network = new Network();
        const leads = await network.getAllLeads();
        setNewList(leads);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchData();
      console.log(newList)
    }
  }, [token]);


  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />
          <Container>

          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StatisticPage;
