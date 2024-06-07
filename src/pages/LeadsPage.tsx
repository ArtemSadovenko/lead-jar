import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import {
  Button,
  InputBase,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import SearchIcon from "../statis/icons/SearchIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchData, writeData } from "../hooks/useData";
import Skeleton from "@mui/material/Skeleton";
import useRunOnce from "../hooks/useRunOnce";
import { useAuth } from "../network/AuthProvider";
import { useNavigate } from "react-router-dom";
import Network from "../network/network";
import { LeadRequest, LeadResponse, LeadStatusBackgroundColors, LeadStatusTextColors, LeadStatusUINames } from "../network/Leads";

function LeadsPage() {
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
  }, [token]); // Trigger the effect when the token changes

  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />

          {isLoading ? (
            <Box sx={{ width: "75vw" }}>
              <Skeleton sx={{ height: "35vh" }} />
              <Skeleton sx={{ height: "25vh" }} animation="wave" />
              <Skeleton sx={{ height: "15vh" }} animation={false} />
            </Box>
          ) : (
            <Container className="content">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "45vw",
                  height: "5vh",
                  marginTop: "30px",
                }}
              >
                <h4
                  style={{
                    padding: "3px 7px 3px 7px",
                  }}
                >
                  BY NAME
                </h4>
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    borderRadius: "10px",
                  }}
                  inputProps={{ "aria-label": "search" }}
                />

                <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>

                <h4
                  style={{
                    padding: "3px 7px 3px 47px",
                  }}
                >
                  ROLE
                </h4>

                <FormControl
                  size="small"
                  sx={{
                    width: "200px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                >
                  <InputLabel sx={{ justifySelf: "center" }}>Any</InputLabel>
                  <Select
                    sx={{
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    label="Any"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Lead generator</MenuItem>
                    <MenuItem value={20}>Sales maneger</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div style={{ padding: "50px 10px 10px 10px " }}>
                <TableContainer component={Paper} sx={{ minWidth: "70vw" }}>
                  <Table
                    sx={{ minWidth: 900 }}
                    // size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>LEADGEN</TableCell>
                        <TableCell align="left">DATE</TableCell>
                        <TableCell align="left">DATE POSTED</TableCell>
                        <TableCell align="left">STATUS</TableCell>
                        <TableCell align="left">TIME SENT</TableCell>
                        <TableCell align="left">NAME</TableCell>
                        <TableCell align="left">URL</TableCell>
                        <TableCell align="left">ROLE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {leads && leads.length > 0
                        ? leads.map((lead) => (
                            // row.role == 'Sales maneger'?(
                            <TableRow
                              key={lead.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {lead.name}
                              </TableCell>
                              <TableCell align="left">{lead.date}</TableCell>
                              <TableCell align="left">
                                {lead.datePosted}
                              </TableCell>
                              <TableCell align="left">
                                {" "}
                                <p
                                  style={{
                                    backgroundColor: LeadStatusBackgroundColors[lead.status],
                                    color: LeadStatusTextColors[lead.status],
                                    borderRadius: "10px",
                                    padding: "5px 0px 5px 10px",
                                  }}
                                >
                                  {" "}
                                  {LeadStatusUINames[lead.status]}
                                </p>
                              </TableCell>
                              <TableCell align="left">
                                <p
                                  style={{
                                    backgroundColor: "#F6E5D6",
                                    color: "#E46027",
                                    borderRadius: "10px",
                                    padding: "5px 0px 5px 5px",
                                  }}
                                >
                                  {lead.date}
                                </p>
                              </TableCell>
                              <TableCell align="left">{lead.name}</TableCell>
                              <TableCell align="left">{lead.url}</TableCell>
                            </TableRow>
                            // ):null
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Container>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default LeadsPage;
