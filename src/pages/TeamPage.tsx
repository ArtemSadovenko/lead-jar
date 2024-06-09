import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import { Role, UserResponse } from "../network/Leads";
import LeadCard from "../components/LeadCard";
import { useAuth } from "../network/AuthProvider";
import Network from "../network/network";
import { Skeleton } from "@mui/material";

// const users: UserResponse[] = [
//   {
//     id: 1,
//     firstname: "John",
//     lastname: "Doe",
//     email: "john.doe@example.com",
//     role: Role.ADMIN,
//   },
//   {
//     id: 2,
//     firstname: "Jane",
//     lastname: "Smith",
//     email: "jane.smith@example.com",
//     role: Role.SALES_MANAGER,
//   },
//   {
//     id: 3,
//     firstname: "Michael",
//     lastname: "Johnson",
//     email: "michael.johnson@example.com",
//     role: Role.LEAD_GENERATOR,
//   },
//   {
//     id: 4,
//     firstname: "Emily",
//     lastname: "Davis",
//     email: "emily.davis@example.com",
//     role: Role.SALES_MANAGER,
//   },
//   {
//     id: 5,
//     firstname: "John",
//     lastname: "Doe",
//     email: "john.doe@example.com",
//     role: Role.ADMIN,
//   },
//   {
//     id: 6,
//     firstname: "John",
//     lastname: "Doe",
//     email: "john.doe@example.com",
//     role: Role.ADMIN,
//   },
//   {
//     id: 7,
//     firstname: "John",
//     lastname: "Doe",
//     email: "john.doe@example.com",
//     role: Role.ADMIN,
//   },
// ];

function TeamPage() {
  const [team, setTeam] = useState<UserResponse[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const network = new Network();
        const team_ = await network.getAllUsers();

        setTeam(team_)

      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />
          <Container className="content">
            <Grid container>
              {isLoading ? (
                <>
                <Grid item md={3}>
                  <Skeleton
                    sx={{
                      width: "12.5rem",
                      height: "17rem",
                      margin: "8px 16px 8px 16px ",
                      borderRadius: "10px",
                    }}
                  ></Skeleton>
                </Grid>
                <Grid item md={3}>
                  <Skeleton
                    sx={{
                      width: "12.5rem",
                      height: "17rem",
                      margin: "8px 16px 8px 16px ",
                      borderRadius: "10px",
                    }}
                  ></Skeleton>
                </Grid>
                <Grid item md={3}>
                  <Skeleton
                    sx={{
                      width: "12.5rem",
                      height: "17rem",
                      margin: "8px 16px 8px 16px ",
                      borderRadius: "10px",
                    }}
                  ></Skeleton>
                </Grid>
                <Grid item md={3}>
                  <Skeleton
                    sx={{
                      width: "12.5rem",
                      height: "17rem",
                      margin: "8px 16px 8px 16px ",
                      borderRadius: "10px",
                    }}
                  ></Skeleton>
                </Grid>
                </> 
              ) : (
                team.map((user) => <LeadCard user={user} />)
              )}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamPage;
