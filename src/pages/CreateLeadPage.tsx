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
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  LeadResponse,
  LeadStatus,
  generateLeadStatusMenuItems,
  generateListTimesMenuItems,
  stringToTimeSent,
} from "../network/Leads";
import { useAuth } from "../network/AuthProvider";
import Network from "../network/network";

function CreateLeadPage() {
  const [globalError, setGlobalError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [date, setDate] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [hireRate, setHireRate] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [country, setCountry] = useState("");

  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [dateFormatError, setDateFormatError] = useState(false);
  const [error, setError] = useState(false);
  const [datePostedError, setDatePostedError] = useState(false);
  const [datePostedFormatError, setDatePostedFormatError] = useState(false);
  const [hireError, setHireError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [evaluation, setEvaluation] = useState("");

  const check = () => {
    return (
      nameError ||
      dateError ||
      dateFormatError ||
      error ||
      datePostedError ||
      datePostedFormatError ||
      hireError ||
      urlError ||
      countryError ||
      date == "" ||
      datePosted == "" ||
      status == "" ||
      time == "" ||
      name == "" ||
      url == "" ||
      hireRate == 0 ||
      country == ""
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  const [leads, setLeads] = useState<LeadResponse[]>([]);
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

  const evaluate = (): string => {
    if (time === "" || country === "") return "Not enought Data to evaluate";

    const sameCountryLeads = leads.filter((lead) => lead.country === country);
    const chattingLeads = sameCountryLeads.filter(
      (lead) => lead.status === LeadStatus.CHATTING
    );
    const evaluatedLeads = chattingLeads.filter(
      (lead) => lead.timeSent === stringToTimeSent(time)
    );
    const percentage = (evaluatedLeads.length / sameCountryLeads.length) * 100;

    if (isNaN(percentage)) {
      return "Success Rate: " + "0.0%";
    }

    const formattedPercentage = percentage.toFixed(1) + "%";

    return "Success Rate: " + formattedPercentage;
  };

  useEffect(() => {
    const evaluation = evaluate();
    setEvaluation(evaluation);
  });

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
                    label="Name"
                    sx={{
                      backgroundColor: "#f5f5fa",
                      margin: "16px 32px 16px 32px",
                      borderRadius: "10px",
                      width: "15em",
                    }}
                    onChange={(event) => {
                      setName(event.target.value);

                      if (event.target.value.length < 3) {
                        setNameError(true); // Reset error state
                      } else {
                        setNameError(false); // Reset error state
                      }
                    }}
                    value={name}
                    placeholder="Enter Name"
                    error = {
                      nameError ? true : false
                    }
                    helperText={
                      nameError
                        ? "Name is too short!"
                        : ""
                    }
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
                    <InputLabel sx={{ justifySelf: "center" }}>
                      Proposal Sent
                    </InputLabel>
                    <Select
                      error={globalError}
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
                      {generateLeadStatusMenuItems()}{" "}
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
                      error={globalError}
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
                      {generateListTimesMenuItems()}{" "}
                      {/* Call the function here */}
                    </Select>
                  </FormControl>
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
                      Hire Rate
                    </InputLabel>
                    <OutlinedInput
                      onChange={(event) => {
                        // Parse input value to integer
                        const value = parseInt(event.target.value);
                        setHireRate(value); // Update state with integer value

                        // Validate input value (between 0 and 100)
                        if (isNaN(value) || value < 0 || value > 100) {
                          setHireError(true);
                        } else {
                          setHireError(false);
                        }
                      }}
                      id="outlined-adornment-amount"
                      label="Amount"
                      placeholder="Enter Hire Rate"
                    />

                    {hireError && (
                      <FormHelperText error={true}>
                        Hire rate must be an integer between 0 and 100
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <TextField
                  label="Country"
                  sx={{
                    backgroundColor: "#f5f5fa",
                    margin: "16px 32px 16px 32px",
                    borderRadius: "10px",
                    width: "15em",
                  }}
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                  value={country}
                  placeholder="Enter Country"
                  error={globalError}
                />
                <Grid item md={4}></Grid>

                <Grid
                  item
                  md={4}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      margin: "16px 0px 16px 32px",
                    }}
                  >
                    {evaluation}
                  </div>
                </Grid>
                <Grid item md={4} />
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
                      }
                    }}
                  >
                    Create
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
