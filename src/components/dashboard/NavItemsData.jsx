import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SeatIcon from '../../assets/seats.png';

function createNav(icon, text, path) {
  return { icon, text, path };
}
let navItems = [
  createNav(
    <AirplanemodeActiveIcon sx={{ fontSize: "30px", color: "white" }} />,
    "Airplanes",
    "/dashboard/airplanes"
  ),
  createNav(
    <FlightTakeoffIcon sx={{ fontSize: "30px", color: "white" }} />,
    "Flight Schedule",
    "/dashboard/flights"
  ),
  createNav(
    <img src={SeatIcon} alt="Seat Icon" style={{ height: '30px' }} />,
    "Seat Availablity",
    "/dashboard/seats"
  ),
  createNav(
    <ChatBubbleOutlineIcon sx={{ fontSize: "30px", color: "white" }} />,
    "Messages",
    "/dashboard/messages"
  ),
  createNav(
    <SettingsIcon sx={{ fontSize: "30px", color: "white" }} />,
    "Settings",
    "/dashboard/settings"
  ),
];
export { navItems };
