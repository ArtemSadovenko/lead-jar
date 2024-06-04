import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import {
  TextField,
  Button,
  Input,
  InputAdornment,
  FilledInput,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { error } from "console";
import OutlinedInput from "@mui/material/OutlinedInput";

import Alert from "@mui/material/Alert";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import LeadsDatabase from "../backend/Database";


function CreateLeadPage() {
  const [globalError, setGlobalError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [leadgen, setLeadgen] = useState("");
  const [date, setDate] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState("");

  const [dateError, setDateError] = useState(false);
  const [dateFormatError, setDateFormatError] = useState(false);
  const [error, setError] = useState(false);
  const [datePostedError, setDatePostedError] = useState(false);
  const [datePostedFormatError, setDatePostedFormatError] = useState(false);
  const [hireError, setHireError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const db = new LeadsDatabase()

  const check = () => {
    return (
      dateError ||
      dateFormatError ||
      error ||
      datePostedError ||
      datePostedFormatError ||
      hireError ||
      urlError ||
      leadgen == "" ||
      date == "" ||
      datePosted == "" ||
      status == "" ||
      time == "" ||
      name == "" ||
      url == "" ||
      rate == ""
    );
  };

  return (
    <Container maxWidth="lg" style={{ padding: 0 }}>
      <Grid container spacing={4} sx={{ padding: 0 }}>
        <SidePanel />

        <Grid item md={9}>
          <TopBar />
          <div
            className="content"
            style={{ padding: "0px 0px 0px 0px ", marginTop: "20px" }}
          >
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "white",
                width: "75vw",
                height: "70vh",
              }}
            >
              <Grid container spacing={0}>
                <Grid item md={4}>
                  <TextField
                    onChange={(event) => {
                      setLeadgen(event.target.value);
                      if (event.target.value.length > 10) {
                        setError(true);
                      } else {
                        setError(false);
                      }
                    }}
                    value={leadgen}
                    error={error || globalError ? true : false}
                    helperText={error ? "Name is out of boundary" : ""}
                    label="Leadgen"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    placeholder="Enter Leadgen"
                  ></TextField>
                </Grid>

                <Grid item md={4}>
                  <TextField
                    label="Date"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    placeholder="dd-mm-yyyy"
                    onChange={(event) => {
                      const value = event.target.value;

                      const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
                      if (dateFormatRegex.test(value)) {
                        const [day, month, year] = value.split("-");

                        const enteredDate = new Date(`${year}-${month}-${day}`);
                        const today = new Date();
                        if (enteredDate < today) {
                          setDate(value);
                          setDateError(false); // Reset error state
                          setDateFormatError(false); // Reset error state
                        } else {
                          console.log("Date must be higher than today's date");
                          setDateError(true); // Set error state
                          setDateFormatError(false); // Reset error state
                        }
                      } else {
                        setDateFormatError(true); // Set error state
                        setDateError(false); // Reset error state
                        console.log(
                          "Invalid date format. Please use dd-MM-yyyy format."
                        );
                      }
                    }}
                    error={
                      dateError || dateFormatError || globalError ? true : false
                    }
                    helperText={
                      dateFormatError || dateError
                        ? "Invalid date format or future date"
                        : ""
                    }
                  ></TextField>
                </Grid>

                <Grid item md={4}>
                  <TextField
                    label="Date posted"
                    // value={datePosted}
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    placeholder="dd-mm-yyyy"
                    onChange={(event) => {
                      const value = event.target.value;

                      const dateFormatRegex = /^\d{2}-\d{2}-\d{4}$/;
                      if (dateFormatRegex.test(value)) {
                        const [day, month, year] = value.split("-");

                        const enteredDate = new Date(`${year}-${month}-${day}`);
                        const today = new Date();
                        if (enteredDate < today) {
                          setDatePosted(value);
                          setDatePostedError(false); // Reset error state
                          setDatePostedFormatError(false); // Reset error state
                        } else {
                          console.log("Date must be higher than today's date");
                          setDatePostedError(true); // Set error state
                          setDatePostedFormatError(false); // Reset error state
                        }
                      } else {
                        setDatePostedFormatError(true); // Set error state
                        setDatePostedError(false); // Reset error state
                        console.log(
                          "Invalid date format. Please use dd-MM-yyyy format."
                        );
                      }
                    }}
                    error={
                      datePostedError || globalError || datePostedFormatError
                        ? true
                        : false
                    }
                    helperText={
                      datePostedFormatError || datePostedError
                        ? "Invalid date format or future date"
                        : ""
                    }
                  ></TextField>
                </Grid>

                <Grid item md={4}>
                  {/* <TextField
                    label="Status"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                    }}
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                    value={status}
                    placeholder="Enter Status"
                    error = {globalError}
                  ></TextField> */}

                    <FormControl
                    size="small"
                    sx={{
                      margin: "16px 32px 16px 32px",
                      width: "15em",
                      height: "3.5em",
                    }}
                  >
                    <InputLabel sx={{ justifySelf: "center" }}>Proposal Sent</InputLabel>
                    <Select
                    error = {globalError}
                      value={status}
                      onChange={(event) => {
                        setStatus(event.target.value);
                      }}
                      sx={{
                        alignItems: "center",
                        backgroundColor: "#f5f5fa",

                        width: "15em",
                        height: "3.5em",
                      }}
                      label="Select status"
                    >
                      <MenuItem value={"Proposal Sent"}>Proposal Sent</MenuItem>
                      <MenuItem value={"Chatting"}>Chatting</MenuItem>
                      <MenuItem value={"Viewed"}>Viewed</MenuItem>
                      <MenuItem value={"In Progress"}>In Progress</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  item
                  md={4}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <FormControl
                    size="small"
                    sx={{
                      margin: "16px 32px 16px 32px",
                      width: "15em",
                      height: "3.5em",
                    }}
                  >
                    <InputLabel sx={{ justifySelf: "center" }}>Time</InputLabel>
                    <Select
                    error = {globalError}
                      value={time}
                      onChange={(event) => {
                        setTime(event.target.value);
                      }}
                      sx={{
                        alignItems: "center",
                        backgroundColor: "#f5f5fa",

                        width: "15em",
                        height: "3.5em",
                      }}
                      label="Time"
                    >
                      <MenuItem value={"12 - 14"}>12 - 14</MenuItem>
                      <MenuItem value={"10 - 16"}>10 - 16</MenuItem>
                      <MenuItem value={"12 - 20"}>12 - 20</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item md={4}>
                  <TextField
                    label="Name"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                    placeholder="Enter Name"
                    error={globalError}
                  ></TextField>
                </Grid>

                <Grid item md={4}>
                  <TextField
                    onChange={(event) => {
                      const value = event.target.value;
                      setUrl(value);
                      const dateFormatRegex =
                        /\b((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)\b/;
                      if (dateFormatRegex.test(value)) {
                        setUrl(value);
                        setUrlError(false);
                      } else {
                        setUrlError(true);
                      }
                    }}
                    value={url}
                    error={globalError || urlError}
                    label="URL"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    placeholder="Enter URL"
                    helperText={urlError ? "Invalid link" : ""}
                  ></TextField>
                </Grid>

                <Grid item md={4}>
                  <FormControl
                    error={hireError || globalError}
                    fullWidth
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                  >
                    <InputLabel htmlFor="outlined-adornment-amount">
                      HireRate
                    </InputLabel>
                    <OutlinedInput
                      onChange={(event) => {
                        setRate(event.target.value);
                        if (event.target.value.length > 3) {
                          setHireError(true);
                        } else {
                          setHireError(false);
                        }
                      }}
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Amount"
                    />

                    {hireError && (
                      <FormHelperText error={true}>
                        Name is out of boundary
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item md={8}></Grid>

                <Grid
                  item
                  md={4}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      margin: "16px 32px 16px 32px",
                      width: "17em",
                      height: "3.5em",
                      backgroundColor: "#706993",
                    }}
                    onClick={() => {
                      if (check()) {
                        setGlobalError(true);
                        setSuccess(false);

                      } else {
                        setGlobalError(false);
                        setSuccess(true);
                        db.create({
                          leadgen : leadgen,
                          date : date,
                          datePosted : datePosted,
                          status : status,
                          time : time,
                          name : name,
                          url : url,
                          hire : rate,
                        })
                      }
                    }}
                  >
                    Create lead
                  </Button>
                </Grid>

                <Grid item md={11}>
                  {success ? (
                    <Alert severity="success">Lead added successfully</Alert>
                  ) : null}
                  {globalError ? (
                    <Alert severity="error">
                      All the filed requred in fit format!
                    </Alert>
                  ) : null}
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateLeadPage;
