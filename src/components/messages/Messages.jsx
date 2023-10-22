import { Box, Checkbox, Grid, Typography } from "@mui/material";
import ButtonWrapper from "../ButtonWrapper";
import SearchField from "../SearchField";
import CardWrapper from "../CardWrapper";
import MessageList from "./MessageList";
import Chat from "./Chat";

const Messages = () => {
  return (
    <Grid container>
      <Grid item md={12}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="h4">
              Messages
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            marginRight: "20px"
          }}>
            <Box>
              <Typography variant="body2" sx={{
                textDecoration: "underline",
              }}>Delete All</Typography>
            </Box>
            <Box>
              <ButtonWrapper text="Create New" borderRadius="10px" />
            </Box>
          </Box>
        </Box>
        <Grid container sx={{
          mt: 2,
          gap: '20px',
        }}>
          <Grid item md={3}>
            <SearchField placeholder="Search" />
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item md={3}>
            <CardWrapper customStyles={{
              overflowY: 'scroll',
              overflowX: 'hidden',
              height: '380px',
              padding: '20px',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Typography variant="body2">Select All</Typography>
                  <Checkbox />
                </Box>
                <Box>
                  <Typography variant="body2">34</Typography>
                </Box>
              </Box>
              <MessageList />
            </CardWrapper>
          </Grid>
          <Grid item md={9} sx={{
            padding: '0 20px 0 20px',
          }}>
            <CardWrapper customStyles={{
              width: '100% important',
              height: '380px',
            }}>
              <Chat />
            </CardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Messages;
