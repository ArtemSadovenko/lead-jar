import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
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
import {
  LeadRequest,
  LeadResponse,
  LeadStatus,
  LeadStatusBackgroundColors,
  LeadStatusTextColors,
  LeadStatusUINames,
  ListTimesColors,
  stringToLeadStatus,
} from "../network/Leads";

function containsQuery(value: any, query: string): boolean {
  if (typeof value === "string") {
    return value.toLowerCase().includes(query.toLowerCase());
  } else if (typeof value === "number") {
    return value.toString().toLowerCase().includes(query.toLowerCase());
  } else if (typeof value === "object" && value !== null) {
    return Object.values(value).some((val) => containsQuery(val, query));
  }
  return false;
}

function filterLeads(
  leads: LeadResponse[],
  searchQuery?: string,
  status?: LeadStatus
): LeadResponse[] {
  const filteredLeads = leads.filter((lead) => {
    const matchesQuery = searchQuery
      ? Object.values(lead).some((value) => containsQuery(value, searchQuery))
      : true;
    const matchesStatus = status === undefined || lead.status === status;
    return matchesQuery && matchesStatus;
  });
  return filteredLeads;
}

function LeadsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<LeadResponse[]>([]);
  const [tableLeads, setTableLeadsLeads] = useState<LeadResponse[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [status, setStatus] = useState<LeadStatus | undefined>(undefined);

  useEffect(() => {
    const filtered = filterLeads(leads, searchQuery, status);
    setTableLeadsLeads(filtered);
  }, [searchQuery, leads, status]);

  const { token } = useAuth();
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

  const reSetLeads = () => {
    setLeads(tableLeads);
  };

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
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                  }}
                />

                <IconButton
                  type="button"
                  sx={{ p: "6px" }}
                  aria-label="search"
                  onClick={() => {
                    // SetShowTable(false);
                    let resLeads = tableLeads;
                    let filteredLeads: LeadResponse[] = [];
                    if (searchQuery.length === 0) {
                      setLeads(tableLeads);
                    } else {
                      for (const lead of resLeads) {
                        if (
                          lead.name.includes(searchQuery) ||
                          lead.creator?.firstname.includes(searchQuery) ||
                          lead.creator?.lastname.includes(searchQuery) ||
                          lead.creator?.role.includes(searchQuery) ||
                          lead.url.includes(searchQuery) ||
                          lead.datePosted.includes(searchQuery) ||
                          lead.status.includes(searchQuery.toUpperCase())
                        ) {
                          filteredLeads.push(lead);
                        }
                      }
                      setLeads(filteredLeads);
                    }
                    setSearchQuery("");
                  }}
                >
                  <SearchIcon />
                </IconButton>

                <h4
                  style={{
                    padding: "3px 7px 3px 47px",
                  }}
                >
                  STATUS
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
                  <InputLabel sx={{ justifySelf: "center" }}>Status</InputLabel>
                  <Select
                    sx={{
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    label="Status"
                    value={status}
                    onChange={(event) => {
                      const choose = event.target.value;
                      if (choose == undefined) setStatus(undefined);
                      else setStatus(stringToLeadStatus(choose));
                    }}
                    // onChange={handleChange}
                  >
                    <MenuItem value={LeadStatus.CHATTING}>Chatting</MenuItem>
                    <MenuItem value={LeadStatus.IN_PROGRESS}>
                      In Progress
                    </MenuItem>
                    <MenuItem value={LeadStatus.PROPOSAL_SENT}>
                      Proposal Sent
                    </MenuItem>
                    <MenuItem value={LeadStatus.VIEWED}>Viewed</MenuItem>
                    <MenuItem value={undefined}>None</MenuItem>
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
                        <TableCell align="left">ROLE</TableCell>
                        <TableCell align="left">DATE</TableCell>
                        <TableCell align="left">DATE POSTED</TableCell>
                        <TableCell align="left">STATUS</TableCell>
                        <TableCell align="left">TIME SENT</TableCell>
                        <TableCell align="left">NAME</TableCell>
                        <TableCell align="left">URL</TableCell>
                        <TableCell align="left">HIRE RATE</TableCell>
                        <TableCell align="left">TOTAL SPEND</TableCell>
                      </TableRow>
                    </TableHead>
                    {
                      <TableBody>
                        {tableLeads && tableLeads.length > 0
                          ? tableLeads.map((lead) => (
                              <TableRow
                                key={lead.id}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {lead.creator?.firstname +
                                    " " +
                                    lead.creator?.lastname}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  {lead.creator?.role}
                                </TableCell>
                                <TableCell align="left">{lead.date}</TableCell>
                                <TableCell align="left">
                                  {lead.datePosted}
                                </TableCell>
                                <TableCell align="left">
                                  {" "}
                                  <p
                                    style={{
                                      backgroundColor:
                                        LeadStatusBackgroundColors[lead.status],
                                      color: LeadStatusTextColors[lead.status],
                                      borderRadius: "10px",
                                      padding: "5px 5px 5px 5px",
                                      textAlign: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {" "}
                                    {LeadStatusUINames[lead.status]}
                                  </p>
                                </TableCell>
                                <TableCell align="left">
                                  <p
                                    style={{
                                      backgroundColor:
                                        ListTimesColors[lead.timeSent],
                                      color: "#FFFFFF",
                                      borderRadius: "10px",
                                      padding: "5px 5px 5px 5px",
                                      textAlign: "center",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {lead.timeSent}
                                  </p>
                                </TableCell>
                                <TableCell align="left">{lead.name}</TableCell>
                                <TableCell align="left">{lead.url}</TableCell>
                                <TableCell align="left">
                                  {Math.floor(lead.hireRate) + "$"}
                                </TableCell>
                                <TableCell align="left">
                                  {Math.floor(lead.totalSpend) + "$"}
                                </TableCell>
                              </TableRow>
                              // ):null
                            ))
                          : null}
                      </TableBody>
                    }
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
