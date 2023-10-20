import { Box, Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Flights from '../flights/Flight';
import Seats from '../seats/Seats';
import Settings from '../settings/Settings';
import { useLocation } from 'react-router-dom';
import Messages from '../messages/Messages';
import { useState } from 'react';

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
      <Grid item sm={2}>
        <Sidebar isOpen={isOpen} />
      </Grid>
      <Grid item sm={10} sx={{
        height: '100vh',
      }}>
        <Navbar handleMenuClick={handleMenuClick} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '30px',
        }}>
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
