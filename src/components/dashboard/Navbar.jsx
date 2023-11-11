import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserIcon from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = ({ handleMenuClick, isOpen }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box
      style={{
        width: '100% !important',
        backgroundColor: 'black',
        ml: isOpen ? '200px' : 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box>
          <IconButton sx={{ color: 'white' }}>
            <MenuIcon fontSize="large" onClick={handleMenuClick} />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Box>
          <Box sx={{ border: '1px solid white', height: '35px', margin: '0px 10px' }}></Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px',
            }}
          >
            <Box sx={{ marginRight: '15px' }}>
              <img
                src={UserIcon}
                alt="user icon"
                height="42px"
                width="42px"
                style={{ borderRadius: '50%', marginTop: '7px' }}
              />
            </Box>
            <Box sx={{ marginRight: '15px', display: 'flex', flexDirection: 'column', color: 'white' }}>
              <Typography variant="body" sx={{ fontWeight: 'bold' }}>
                {user && user.username}
              </Typography>
              <Typography variant="body2">
                {user && user.email}
              </Typography>
            </Box>
            <Box>
              <IconButton sx={{ color: 'white' }}>
                <KeyboardArrowDownIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
