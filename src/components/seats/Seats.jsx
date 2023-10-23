import { Typography, Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import CardWrapper from "../CardWrapper";

const Seat = ({ seatData }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: seatData.isBooked ? "gray" : "white",
        border: "1px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      {seatData.isBooked ? "" : seatData.seatNumber}
    </div>
  );
};

const generateDummySeatData = (totalSeats, bookedSeats) => {
  const seatData = [];
  for (let i = 1; i <= totalSeats; i++) {
    const isBooked = bookedSeats.includes(i);
    seatData.push({ seatNumber: i, isBooked });
  }
  return seatData;
};

const Seats = () => {
  const businessClassSeats = generateDummySeatData(24, [7, 8, 15, 16, 22, 23]);
  const economyClassSeats = generateDummySeatData(24, [7, 8, 15, 16, 22, 23]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Seats Availability
        </Typography>
      </Grid>
      <Grid item xs={12} sx= {{padding: "50px" }}>
        <CardWrapper>
          <div style={{padding: '20px'}}>
          <SearchBar />
          <br />
          <br />
          <Grid container spacing={2} sx={{ border: "1px dashed #000", padding: "20px" }}>
            <Grid item xs={5}>
              <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold"}} color="text.secondary">
                Business Class
              </Typography>
              <br/>
              <br/>
              <Grid container spacing={2}>
                {businessClassSeats.map((seat, index) => (
                  <Grid item xs={3} key={index}>
                    <Seat seatData={seat} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold"}} color="text.secondary">
                Economy Class
              </Typography>
              <br/>
              <br/>
              <Grid container spacing={2}>
                {economyClassSeats.map((seat, index) => (
                  <Grid item xs={3} key={index}>
                    <Seat seatData={seat} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          </div>
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

export default Seats;
