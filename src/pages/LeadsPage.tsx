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
} from "@mui/material";
import SearchIcon from "../statis/icons/SearchIcon";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Database from "../backend/database";
import Leads from "../backend/Leads";
import useRunOnce from "../hooks/userRunOnce";

function LeadsPage() {
  const [list, setList] = useState<Leads[]>([]);

  const db = new Database('thebest')

  useRunOnce({
    fn: () => {
      setList(db.read())
    }
  }, []);

  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />
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
                    {list.map((lead) => (
                      // row.role == 'Sales maneger'?(
                      <TableRow
                        key={lead.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {lead.leadgen}
                        </TableCell>
                        <TableCell align="left">{lead.date}</TableCell>
                        <TableCell align="left">{lead.datePosted}</TableCell>
                        <TableCell align="left">
                          {" "}
                          <p
                            style={{
                              backgroundColor: "#E1F7F4",
                              color: "#269E8C",
                              borderRadius: "10px",
                              padding: "5px 0px 5px 10px",
                            }}
                          >
                            {" "}
                            {lead.status}
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
                            {lead.time}
                          </p>
                        </TableCell>
                        <TableCell align="left">{lead.name}</TableCell>
                        <TableCell align="left">{lead.url}</TableCell>
                        <TableCell align="left">{"Admin"}</TableCell>
                      </TableRow>
                      // ):null
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LeadsPage;
