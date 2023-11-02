import { Box, Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Flights from '../flights/Flight';
import Seats from '../seats/Seats';
import Settings from '../settings/Settings';
import { useLocation } from 'react-router-dom';
import Messages from '../messages/Messages';
import { useState } from 'react';
import AirPlane from '../airplanes/AirPlane';

const Dashboard = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          {location.pathname === '/dashboard/flights' && <Flights />}
          {location.pathname === '/dashboard/airplanes' && <AirPlane />}
          {location.pathname === '/dashboard/seats' && <Seats />}
          {location.pathname === '/dashboard/messages' && <Messages />}
          {location.pathname === '/dashboard/settings' && <Settings />}
        </Box>
      </Grid>
    </Grid >
  );
};

export default Dashboard;
