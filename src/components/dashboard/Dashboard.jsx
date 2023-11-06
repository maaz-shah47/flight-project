import { Box, CircularProgress, Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Flights from '../flights/Flight';
import Seats from '../seats/Seats';
import Settings from '../settings/Settings';
import { useLocation } from 'react-router-dom';
import Messages from '../messages/Messages';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config';
import AirPlane from '../airplanes/AirPlane';

const Dashboard = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const fetchUser = async () => {
      let registerRequest;
      try {
        registerRequest = await axios.get(
          `${config.SERVER_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const { data: registerRequestData } = registerRequest;
        console.log("RegisterRequestData", registerRequestData);
        if (registerRequestData) {
          setLoader(false);
          setUser(registerRequestData);
          localStorage.setItem(
            "user",
            JSON.stringify(registerRequestData)
          );
        }
      } catch ({ response }) {
        registerRequest = response;
        setLoader(false);
      }
    }

    fetchUser();
  }, [])
  return (
    loader ? (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <CircularProgress />
      </Box>
    ) :
      <Grid container sx={{
        backgroundColor: '#f5f5f5',
      }}>
        <Grid item sm={isOpen ? 2 : 1}>
          <Sidebar isOpen={isOpen} />
        </Grid>
        <Grid item sm={isOpen ? 10 : 11}>
          <Navbar handleMenuClick={handleMenuClick} />
          <Box sx={{
            padding: '30px',
            overflow: 'hidden !important',
            overflowY: 'scroll !important',
          }}>
            {location.pathname === '/dashboard/airplanes' && <AirPlane />}
            {location.pathname === '/dashboard/flights' && <Flights />}
            {location.pathname === '/dashboard/seats' && <Seats />}
            {location.pathname === '/dashboard/messages' && <Messages />}
            {location.pathname === '/dashboard/settings' && <Settings />}
          </Box>
        </Grid>
      </Grid >
  );
};

export default Dashboard;
