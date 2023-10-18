import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function createNav(icon, text, path) {
  return { icon, text, path };
}
let navItems = [
  createNav(
    <FlightTakeoffIcon sx={{ fontSize: "25px", color: "white" }} />,
    "Flight Schedule",
    "/dashboard/flights"
  ),
  createNav(
    <FlightTakeoffIcon sx={{ fontSize: "25px", color: "white" }} />,
    "Seat Availablity",
    "/dashboard/seats"
  ),
  createNav(
    <FlightTakeoffIcon sx={{ fontSize: "25px", color: "white" }} />,
    "Messages",
    "/dashboard/messages"
  ),
  createNav(
    <FlightTakeoffIcon sx={{ fontSize: "25px", color: "white" }} />,
    "Settings",
    "/dashboard/settings"
  ),
];
export { navItems };
