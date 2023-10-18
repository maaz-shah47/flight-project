import { Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Flights from "../flights/Flight";
import Seats from "../seats/Seats";
import Settings from "../settings/Settings";

const styles = {
  main: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: "yellow !important"
  },
  content: {
    flexGrow: 1,
    position: 'absolute',
    left: '22%',
    top: '17%',
  },
};


export const Dashboard = () => {
  return (
    <Container style={styles.main}>
      <Container>
        <CssBaseline />
        <Navbar />
        <Sidebar />
      </Container>
      <Container style={styles.content}>
        {location.pathname === "/dashboard/flights" && <Flights />}
        {location.pathname === "/dashboard/seats" && <Seats />}
        {location.pathname === "/dashboard/messages" && <Typography variant="h3">Messages</Typography>}
        {location.pathname === "/dashboard/settings" && <Settings />}
      </Container>
    </Container>
  );
}
