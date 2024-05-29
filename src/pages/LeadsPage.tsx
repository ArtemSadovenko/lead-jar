import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import {
  InputBase,
  IconButton,
  FormControl,
  FormLabel,
  FormHelperText,
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




function createData(
  leadGen: string,
  date: string,
  datePosted: string,
  status: string,
  timeSent: string,
  name: string,
  url: string
) {
  return { leadGen, date, datePosted, status, timeSent, name, url };
}

const rows = [
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
  createData(
    "Wade",
    "01.04.2024",
    "03.04.2024",
    "PROPOSAL SENT",
    "12.00 - 14.00",
    "Landing",
    "www.com"
  ),
];

function LeadsPage() {
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
                  <MenuItem value={10}>Dev</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                  <MenuItem value={30}>Admin</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{  padding: "50px 10px 10px 10px " }}>
              <TableContainer component={Paper} >
                <Table
                  sx={{ minWidth: 650 }}
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
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row"  >{row.leadGen}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.datePosted}</TableCell>
                        <TableCell align="left" > <p 
                        style={{
                            backgroundColor: "#E1F7F4",
                            color:"#269E8C",
                            borderRadius: "10px",
                            padding:"0px 0px 0px 10px"
                          }}> {row.status}</p></TableCell>
                        <TableCell align="left"><p
                          style={{
                            backgroundColor: "#F6E5D6",
                            color:"#E46027",
                            borderRadius: "10px",
                            padding:"0px 0px 0px 5px"
                          }}
                        >{row.timeSent}</p></TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.url}</TableCell>
                      </TableRow>
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
