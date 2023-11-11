import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import FlightTable from "./FlightTable";
import SearchBar from "./SearchBar";
import CardWrapper from "../CardWrapper";
import config from "../../config";
import axios from "axios";

const Flights = () => {
  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(true);

  const [flightNo, setFlightNo] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      let flightRequest;
      try {
        flightRequest = await axios.get(
          `${config.SERVER_URL}/routes`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              ContentType: "application/json",
            },
            params: {
              // Include any necessary parameters for fetching flights
            },
          }
        );
    
        const { data: flightData } = flightRequest;
        console.log("FlightData", flightData.results);
        if (flightData) {
          setLoader(false);
          setFlights(flightData.results);
          setFilteredFlights(flightData.results);
        }
      } catch ({ response }) {
        flightRequest = response;
        setLoader(false);
      }
    };    

    fetchFlights();
  }, []);

  useEffect(() => {
    setFilteredFlights(
      flights.filter((flight) =>
        flight.planeCode.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    // Include the submit logic here
    // Send a POST request with flight data to the server
    try {
      const response = await axios.post(
        `${config.SERVER_URL}/routes`,
        {
          "planeCode": flightNo,
          "startLat": from,
          "endLat": to,
          "startLng": "-214.098898",
          "endLng": "-324.098898",
          "arrivalTime": arrival,
          "departureTime": departure,
          "price": "250 $",
          "status": "Forth and Back"
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("New flight data has been successfully posted:", response.data);

      // Assuming the response is the new data
    handleClose()
    } catch (error) {
      console.error("Error posting new flight data:", error);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Flights Schedule
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            padding: "10px 50px",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          onClick={handleOpen}
        >
          New Flights
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CardWrapper>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          <FlightTable flights={filteredFlights} />
        </CardWrapper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "black", color: "white" }}>
          New Flight
        </DialogTitle>
        <br />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Flight Number</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Flight Number"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">From</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">To</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Departure Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Departure Time"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Arrival Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Arrival Time"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              borderColor: "black",
              color: "black",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Flights;
