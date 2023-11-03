import { Typography, Button, Grid, Paper } from "@mui/material";
import FlightTable from "./AirPlaneTable";
import SearchBar from "./SearchBar";
import CardWrapper from "../CardWrapper";

const AirPlane = () => {
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
            padding: "10px 50px", // Add padding for space on the left and right
            "&:hover": {
              backgroundColor: "gray", // Change hover color
            },
          }}
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
    </Grid>
  );
};

export default AirPlane;
