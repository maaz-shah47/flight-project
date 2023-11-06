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
  }, [searchQuery])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Browse"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Number</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Type here"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Total Seats</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="8"
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
            onClick={handleClose}
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
