import { Typography, Grid, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import CardWrapper from "../CardWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

const Seat = ({ seatData }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: seatData.status === "available" ? "white" : "gray",
        border: "1px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      {seatData.status === "available" ? seatData.seatNumber : ""}
    </div>
  );
};

const generateSeatsData = (seatList) => {
  const seatData = [];
  for (const [seat, status] of Object.entries(seatList)) {
    seatData.push({ seatNumber: seat, status: status });
  }
  return seatData;
};

const Seats = () => {
  const [planes, setPlanes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [selectedPlaneId, setSelectedPlaneId] = useState(null);
  const [seatsData, setSeatsData] = useState([]);

  const businessSeats = seatsData?.find((seat) => seat.seatType === "business");
  const economySeats = seatsData?.find((seat) => seat.seatType === "economy");
  console.log("Business Seats: ", businessSeats);
  console.log("Economy Seats: ", economySeats);
  const businessClassSeats = businessSeats && businessSeats.seatList
    ? generateSeatsData(businessSeats?.seatList) : [];

  const economyClassSeats = economySeats && economySeats.seatList
    ? generateSeatsData(economySeats?.seatList) : [];

  // Define the handleSearchChange function
  const handleSearchChange = (selectedPlaneId) => {
    setSelectedPlaneId(selectedPlaneId);
  };

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
        if (registerRequestData) {
          setLoader(false);
          setPlanes(registerRequestData.response.planes);
        }
      } catch ({ response }) {
        registerRequest = response;
        setLoader(false);
      }
    };

    fetchPlanes();
  }, []);

  useEffect(() => {
    const fetchPlaneSeats = async () => {
      let registerRequest;
      try {
        registerRequest = await axios.get(
          `${config.SERVER_URL}/planes/${selectedPlaneId}`,
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
          setSeatsData(registerRequestData.seats);
        }
      } catch ({ response }) {
        registerRequest = response;
        setLoader(false);
      }
    }

    fetchPlaneSeats();
  }, [selectedPlaneId]);

  useEffect(() => {
    console.log("Planes", planes);
    console.log("Seats Data: ", seatsData);
  }, [planes, seatsData]);

  return (
    
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Seats Availability
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ padding: "50px" }}>
        <CardWrapper>
          <div style={{ padding: '20px' }}>
            {/* Pass the planes array and the handleSearchChange function as props */}
            <SearchBar planes={planes} onSearchChange={handleSearchChange} />
            <br />
            <br />
            <Grid container spacing={2} sx={{ border: "1px dashed #000", padding: "20px" }}>
            {!selectedPlaneId ? (
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                height: '50vh'
              }}>
                Select Plane to view seats
              </Box>
            ) : (
              <>
              <Grid item xs={5}>
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }} color="text.secondary">
                  Business Class
                </Typography>
                <br />
                <br />
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
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }} color="text.secondary">
                  Economy Class
                </Typography>
                <br />
                <br />
                <Grid container spacing={2}>
                  {economyClassSeats.map((seat, index) => (
                    <Grid item xs={3} key={index}>
                      <Seat seatData={seat} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              </>
            )}
            </Grid>
          </div>
        </CardWrapper>
      </Grid>
    </Grid>
  );
};

export default Seats;
