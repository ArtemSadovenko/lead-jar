import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import {
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
import { fetchData , writeData } from "../hooks/useData";
import Skeleton from "@mui/material/Skeleton";
import { Leads } from "../backend/Database";
import DatabaseLeads from "../backend/Database";
import useRunOnce from "../hooks/useRunOnce";
import axios from "axios";

// function createData(
//   leadGen: string,
//   date: string,
//   datePosted: string,
//   status: string,
//   timeSent: string,
//   name: string,
//   url: string,
//   role: string
// ) {
//   return { leadGen, date, datePosted, status, timeSent, name, url, role };
// }

// const rows = [
//   createData(
//     "Mat",
//     "02.04.2024",
//     "03.07.2024",
//     "PROPOSAL SENT",
//     "11.00 - 14.00",
//     "Landing",
//     "www.com",
//     "Lead generator"
//   ),
//   createData(
//     "Wade",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "12.00 - 14.00",
//     "WebFlow",
//     "www.com",
//     "Lead generator"
//   ),
//   createData(
//     "Robert",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "12.00 - 19.00",
//     "Tilda",
//     "www.com",
//     "Lead generator"
//   ),
//   createData(
//     "Phill",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "12.00 - 14.00",
//     "Lead generatorOps",
//     "www.com",
//     "Admin"
//   ),
//   createData(
//     "Ada",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "10.00 - 12.00",
//     "WordPress",
//     "www.com",
//     "Admin"
//   ),
//   createData(
//     "Kate",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "12.00 - 14.00",
//     "Landing",
//     "www.com",
//     "Sales maneger"
//   ),
//   createData(
//     "Andrey",
//     "01.04.2024",
//     "03.04.2024",
//     "PROPOSAL SENT",
//     "12.00 - 14.00",
//     "Landing",
//     "www.com",
//     "Sales maneger"
//   ),
// ];

// const leads = [
//   {
//   leadGen: "Mat",
//   date:"02.04.2024",
//   datePosted:"03.07.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"11.00 - 14.00",
//   name:"Landing",
//   url:"www.com",
//   role:"Lead generator"
//   },
//   {
//   leadGen: "Wade",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"12.00 - 14.00",
//   name:"WebFlow",
//   url:"www.com",
//   role:"Lead generator"
//   },
//   {
//   leadGen: "Robert",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"12.00 - 19.00",
//   name:"Tilda",
//   url:"www.com",
//   role:"Lead generator"
//   },
//   {
//   leadGen: "Phill",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"12.00 - 14.00",
//   name:"Lead generatorOps",
//   url:"www.com",
//   role:"Admin"
//   },
//   {
//   leadGen: "Ada",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"10.00 - 12.00",
//   name:"WordPress",
//   url:"www.com",
//   role:"Admin"
//   },
//   {
//   leadGen: "Kate",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"12.00 - 14.00",
//   name:"Landing",
//   url:"www.com",
//   role:"Sales maneger"
//   },
//   {
//   leadGen: "Andrey",
//   date:"01.04.2024",
//   datePosted:"03.04.2024",
//   status:"PROPOSAL SENT",
//   timeSent:"12.00 - 14.00",
//   name:"Landing",
//   url:"www.com",
//   role:"Sales maneger"
//   }
// ]

function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const db = new DatabaseLeads();
  // // setLeads(somedata)
  // const addItemToList = () => {
  //   console.log("pring sdfsd");
  // };

  // const write = () => {
  //   for (const row of rows) {
  //     const anotherLead: Leads = {
  //       leadGen: row.leadGen,
  //       date: row.date,
  //       datePosted: row.datePosted,
  //       status: row.status,
  //       timeSent: row.timeSent,
  //       name: row.timeSent,
  //       url: row.url,
  //       role: row.role,
  //     };

  //     console.log(anotherLead);

  //     db.create(anotherLead);
  //   }
  // };


  // useRunOnce({
  //   fn: write, sessionKey: "01",
  // });

 
  // // const read = () => {
  // setLeads(db.read());
  // };

  //  for(const row of rows){
  //   const anotherLead: Leads = {
  //     leadGen: row.leadGen,
  //     date: row.date,
  //     datePosted: row.datePosted ,
  //     status: row.status ,
  //     timeSent: row.timeSent ,
  //     name: row.timeSent ,
  //     url: row.url ,
  //     role: row.role
  //   };

  //   console.log(anotherLead)

  //   db.create(anotherLead)
  // }

  // useEffect(() => {
  //   const load = async() =>{
  //   try {
  //     const fetchedLeads = await fetchData(); // Assuming useData fetches data
  //     setLeads(fetchedLeads);
  //   } catch (err) {
  //     console.error('Error fetching leads:', err);
  //   } finally {
  //     setIsLoading(false); // Ensure preloader is hidden even on errors
  //   }}

  //   load()
  // }, []);

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const data = await axios.get('http://localhost:3001/users');;

        console.log(data)
        

        setLeads(data.data); // Update leads state
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };

    fetchDataFromBackend(); // Call the fetchData function
  }, []); // Run this effect only once on component mount



  


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
                        ? leads.map((row) => (
                            // row.role == 'Sales maneger'?(
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.leadGen}
                              </TableCell>
                              <TableCell align="left">{row.date}</TableCell>
                              <TableCell align="left">
                                {row.datePosted}
                              </TableCell>
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
                                  {row.status}
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
                                  {row.timeSent}
                                </p>
                              </TableCell>
                              <TableCell align="left">{row.name}</TableCell>
                              <TableCell align="left">{row.url}</TableCell>
                              <TableCell align="left">{row.role}</TableCell>
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
