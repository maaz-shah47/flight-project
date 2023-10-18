import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserIcon from '../../assets/user.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <AppBar sx={{
      width: { sm: `calc(100% - 270px)` },
      backgroundColor: 'black',
      padding: "5px"
    }}>
      <Toolbar>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
          <Box>
            <IconButton sx={{
              color: "white"
            }}>
              <MenuIcon fontSize='large' />
            </IconButton>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Box>
              <IconButton sx={{
                color: "white"
              }}>
                <NotificationsIcon sx={{
                  fontSize: "30px"
                }} />
              </IconButton>
            </Box>
            <Box sx={{
              border: '1px solid white',
              height: '35px',
              margin: '0px 10px',
            }}></Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px',
            }}>
              <Box sx={{
                marginRight: "15px"
              }}>
                <img src={UserIcon} alt="user icon" height="42px" width="42px"
                  style={{
                    borderRadius: "50%",
                    marginTop: "7px"
                  }} />
              </Box>
              <Box sx={{
                marginRight: "15px",
                display: "flex",
                flexDirection: "column",
              }}>
                <Typography variant="body" sx={{
                  fontWeight: "bold"
                }}>
                  Jack Jill
                </Typography>
                <Typography variant="body2">
                  jackjill@example.com
                </Typography>
              </Box>
              <Box>
                <IconButton sx={{
                  color: "white"
                }}>
                  <KeyboardArrowDownIcon fontSize='large' />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default Navbar;
