import React from "react";
import SearchPanel from "./SearchPanel";
import { Container, Button, IconButton, Grid } from "@mui/material";
import "./TopBar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

function TopBar() {
  const navigator = useNavigate();

  const redirect = () => {
    navigator("/dashboard/leads/create");
  };

  return (
    <div className="container">
      <div className="search">
        <SearchPanel />
      </div>
      <div style={{ paddingLeft: "15vw" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "25px", backgroundColor: "#706993" }}
          onClick={redirect}
          endIcon={<AddIcon/>}
        >
          Add New
        </Button>

        <Button
          sx={{ margin: "3px 20px 3px 20px" }}
          variant="outlined"
          startIcon={<AccountCircleIcon />}
        >
          User
        </Button>
      </div>
    </div>
    // {/* <Grid container spacing={0} sx={{margin: "0"}}>

    //       <Grid item md={9}>
    //       <SearchPanel/>
    //       </Grid>

    //       <Grid item md={3}>
    //         <Button variant="contained" color="primary" sx={{borderRadius: "25px", backgroundColor: "#706993"}}>
    //           Add New
    //         </Button>
    //         <Button

    //             variant='outlined'
    //             startIcon={<AccountCircleIcon/>}>
    //             User
    //         </Button>
    //         </Grid>
    // </Grid> */}
  );
}

export default TopBar;