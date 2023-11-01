import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const MessageDialog = ({ open, setOpen }) => {
  const [sendTo, setSendTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSendToChange = (e) => {
    setSendTo(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
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
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant="body2">Send To</Typography>
              <TextField
                label="Type Name"
                variant="outlined"
                value={sendTo}
                onChange={handleSendToChange}
              />
              <Typography variant="body2">Message</Typography>
              <TextField
                label="Type Here"
                variant="outlined"
                multiline
                minRows={6}
                value={message}
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

        >Send</Button>
      </DialogActions>
    </Dialog >
  )
}

export default MessageDialog;
