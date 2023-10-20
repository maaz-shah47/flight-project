// import Drawer from '@mui/material/Drawer';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import { Box, ListItemButton, ListItemIcon } from '@mui/material';
// import Logo from '../../assets/logo.png';
// import { navItems } from './NavItemsData';
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <Drawer variant="permanent" sx={{
//       flexShrink: 0,
//       [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', backgroundColor: 'black', color: "white", padding: "25px", zIndex: '-9999' },
//     }}
//     >
//       <Box style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
//         <img src={Logo} alt="Logo" style={{ height: '100px' }} />
//       </Box>

//       <Divider />

//       {navItems.map((item) => (
//         <ListItem disablePadding key={item.text} sx={{
//           padding: "10px 0px",
//         }}>
//           <ListItemButton
//             component={Link}
//             to={item.path}
//             style={{
//               paddingTop: 0,
//               paddingBottom: 0,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 m: 0,
//                 padding: "5px 5px 5px 10px",
//                 minWidth: 0,
//               }}
//             >
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "14px",
//               }}
//               primary={item.text}
//             />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </Drawer>
//   );
// };

// export default Sidebar;

import { List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { navItems } from './NavItemsData';

const Sidebar = ({ isOpen }) => {
  return (
    <Box sx={{
      widht: '100% !important',
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <img src={Logo} alt="Logo" style={{ height: '50px', width: '50px' }} />
      </Box>
      <Divider />
      <List sx={{
        padding: isOpen ? '15px' : '30px'
      }}>
        {navItems.map((item) => (
          <ListItem disablePadding key={item.text}>
            <ListItemText>
              <ListItem
                button
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  fontSize: '11px !important',
                }}
              >
                {item.icon}
                {isOpen && (
                  <ListItemText primary={item.text}
                    sx={{ paddingLeft: 2, }}
                    primaryTypographyProps={{
                      fontSize: "12px",
                    }}
                  />
                )}
              </ListItem>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
