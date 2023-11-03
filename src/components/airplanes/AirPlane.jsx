import React, { useState } from "react";
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

const AirPlane = () => {
  const [open, setOpen] = useState(false);

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
          <SearchBar />
          <br />
          <FlightTable />
        </CardWrapper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "black", color: "white" }}>
          New Airplane
        </DialogTitle>
        <br/>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Flight Number</Typography>
              <TextField fullWidth variant="outlined" margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">From</Typography>
              <TextField fullWidth variant="outlined" margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">To</Typography>
              <TextField fullWidth variant="outlined" margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Departure Time</Typography>
              <TextField fullWidth variant="outlined" margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Arrival Time</Typography>
              <TextField fullWidth variant="outlined" margin="normal" />
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
