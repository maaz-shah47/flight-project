import { useState, useEffect } from "react";
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
import FlightTable from "./AirPlaneTable";
import SearchBar from "./SearchBar";
import CardWrapper from "../CardWrapper";
import config from "../../config";
import axios from "axios";

const AirPlane = () => {
  const [open, setOpen] = useState(false);
  const [planes, setPlanes] = useState([]);
  const [filteredPlanes, setFilteredPlanes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(true);

  const [image, setImage] = useState(null); // Use null to initially represent no image
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Additional fields
  const [planename, setPlanename] = useState("");
  const [planecapacity, setPlanecapacity] = useState("");
  const [codename, setCodename] = useState("");
  const [startLatitude, setStartLatitude] = useState("");
  const [startLongitude, setStartLongitude] = useState("");
  const [endLatitude, setEndLatitude] = useState("");
  const [endLongitude, setEndLongitude] = useState("");
  const [costPerSeat, setCostPerSeat] = useState("");


  useEffect(() => {
    const fetchPlanes = async () => {
      let registerRequest;
      try {
        registerRequest = await axios.get(
          `${config.SERVER_URL}/planes`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              ContentType: "application/json",
            },
            params: {
              startLatitude: 34.0522,
              startLongitude: -118.2437,
              endLatitude: 40.7128,
              endLongitude: -74.0060,
              startDate: "2023-10-15T12:00:00Z",
              endDate: "2023-10-16T12:00:00Z",
              totalCount: 5
            },
          }
        );
    
        const { data: registerRequestData } = registerRequest;
        console.log("RegisterRequestData", registerRequestData);
        if (registerRequestData) {
          setLoader(false);
          setPlanes(registerRequestData.response.planes);
          setFilteredPlanes(registerRequestData.response.planes);
        }
      } catch ({ response }) {
        registerRequest = response;
        setLoader(false);
      }
    };    

    fetchPlanes();
  }, []);

  useEffect(() => {
    setFilteredPlanes(
      planes.filter((plane) =>
        plane.codename.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // Additional field handlers
  const handlePlanenameChange = (event) => {
    setPlanename(event.target.value);
  };

  const handlePlanecapacityChange = (event) => {
    setPlanecapacity(event.target.value);
  };

  const handleCodenameChange = (event) => {
    setCodename(event.target.value);
  };

  const handleStartLatitudeChange = (event) => {
    setStartLatitude(event.target.value);
  };

  const handleStartLongitudeChange = (event) => {
    setStartLongitude(event.target.value);
  };

  const handleEndLatitudeChange = (event) => {
    setEndLatitude(event.target.value);
  };

  const handleEndLongitudeChange = (event) => {
    setEndLongitude(event.target.value);
  };

  const handleCostPerSeatChange = (event) => {
    setCostPerSeat(event.target.value);
  };
  

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("planename", planename);
    formData.append("planecapacity", planecapacity);
    formData.append("codename", codename);
    formData.append("startLatitude", startLatitude);
    formData.append("startLongitude", startLongitude);
    formData.append("endLatitude", endLatitude);
    formData.append("endLongitude", endLongitude);
    formData.append("costPerSeat", costPerSeat);

    try {
      const response = await axios.post(`${config.SERVER_URL}/planes`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("New plane data has been successfully posted:", response.data);

      handleClose();
    } catch (error) {
      console.error("Error posting new plane data:", error);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Airplanes
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
          New AirPlane
        </Button>
      </Grid>
      <Grid item xs={12}>
        <CardWrapper>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br />
          <FlightTable planes={filteredPlanes} />
        </CardWrapper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "black", color: "white" }}>
          New Airplane
        </DialogTitle>
        <br />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Upload Image</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Number</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Number"
                value={codename}
                onChange={handleCodenameChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Start Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">End Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="End Date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Plane Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Plane Name"
                value={planename}
                onChange={handlePlanenameChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Start Latitude</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Start Latitude"
                value={startLatitude}
                onChange={handleStartLatitudeChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Start Longitude</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Start Longitude"
                value={startLongitude}
                onChange={handleStartLongitudeChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">End Latitude</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="End Latitude"
                value={endLatitude}
                onChange={handleEndLatitudeChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">End Longitude</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="End Longitude"
                value={endLongitude}
                onChange={handleEndLongitudeChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Cost Per Seat</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Cost Per Seat"
                value={costPerSeat}
                onChange={handleCostPerSeatChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Total Seats</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Total Seats"
                value={planecapacity}
                onChange={handlePlanecapacityChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
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

export default AirPlane;
