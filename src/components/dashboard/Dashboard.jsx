import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Flights from "../flights/Flight";
import Seats from "../seats/Seats";

const styles = {
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '80px 0px 0px 90px',
  },
};


export const Dashboard = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Sidebar />

      <Container style={styles.content}>
        {location.pathname === "/dashboard/flights" && <Flights />}
        {location.pathname === "/dashboard/seats" && <Seats />}
        {location.pathname === "/dashboard/messages" && <Typography variant="h3">Messages</Typography>}
        {location.pathname === "/dashboard/settings" && <Typography variant="h3">Settings</Typography>}
      </Container>
    </Box>
  );
}
