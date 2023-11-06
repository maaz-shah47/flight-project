import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import NewMessageTextField from "./NewMessageTextField";

const MessageDialog = ({ open, setOpen, users, socket }) => {
  const [sendTo, setSendTo] = useState('');
  const [messageText, setMessageText] = useState('');
  const [userId, setUserId] = useState(null);

  const handleSendToChange = (e) => {
    setSendTo(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSearchChange = (id) => {
    setUserId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("MESSAGE, USERID, OPEN", messageText, userId, open);
    if (messageText) {
      const message = {
        action: 'send',
        data: {
          messageText: messageText,
          sentBy: 'admin',
          sentTo: userId.toString(),
          readBy: [],
          users: ['admin', userId.toString()]
        }
      }
      console.log("MESSAGE: ", messageText);
      socket.send(JSON.stringify(message));
      setMessageText('');
      setOpen(false);
      setUserId(null);
    }
  };
  return (
    <Dialog open={open} sx={{
      "& .MuiDialog-paper": {
        width: { lg: "50%", md: "60%", xs: "90%" },
        maxHeight: {
          md: "90%",
          xs: "90%",
          sm: "70%"
        },
        borderRadius: "30px",
      },
    }}

    >
      <DialogTitle sx={{
        backgroundColor: 'black'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Typography variant="h5" sx={{
            color: 'white'
          }}>New Message</Typography>
          <IconButton sx={{
            color: 'white !important'
          }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 3 }}>
          <form>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant="body2">Send To</Typography>
              <NewMessageTextField users={users} onSearchChange={handleSearchChange} />
              <Typography variant="body2">Message</Typography>
              <TextField
                label="Type Here"
                variant="outlined"
                multiline
                minRows={6}
                value={messageText}
                onChange={handleMessageChange}
              />
            </Box>
          </form>
        </Box>
      </DialogContent>

      <Divider sx={{ marginTop: "20px" }} />
      <DialogActions
        style={{
          display: "flex",
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '20px'
        }}
      >
        <Button variant="outlined" sx={{
          color: 'black',
          borderColor: 'black'
        }}
          onClick={() => setOpen(false)}
        >Cancel</Button>
        <Button variant="contained" sx={{
          backgroundColor: 'black',
          color: 'white',
          "&:hover": {
            backgroundColor: 'black',
            color: 'white',
          }
        }}
          onClick={handleSubmit}
        >Send</Button>
      </DialogActions>
    </Dialog >
  )
}

export default MessageDialog;
