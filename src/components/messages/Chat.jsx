import { makeStyles } from '@material-ui/core/styles';
import { Divider, TextField, IconButton, Typography } from '@material-ui/core';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const messages = [
  {
    id: 1,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Hello, how are you?',
    time: '12:00 PM',
  },
  {
    id: 2,
    name: 'Jane Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'I am doing great. Thanks for asking!',
    time: '12:05 PM',
  },
  {
    id: 3,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Hello, how are you?',
    time: '12:00 PM',
  },
  {
    id: 4,
    name: 'Jane Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'I am doing great. Thanks for asking!',
    time: '12:05 PM',
  },
  {
    id: 5,
    name: 'Jane Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'I am doing great. Thanks for asking!',
    time: '12:05 PM',
  },
  {
    id: 6,
    name: 'Jane Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'I am doing great. Thanks for asking!',
    time: '12:05 PM',
  },
  {
    id: 3,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Hello, how are you?',
    time: '12:00 PM',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  messages: {
    flex: '1 1 auto',
    overflowY: 'auto',
  },
  footer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: theme.spacing(1, 3),
    border: '1px solid #e0e0e0',
  },
  textField: {
    flex: '1 1 auto',
  },
}));

const Chat = () => {
  const classes = useStyles();

  const message = {
    id: 1,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Box>
            <img src={message.profile} alt="" height='40px' width='40px' style={{
              borderRadius: '50%',
            }} />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="subtitle2">
              {message.name}</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Typography style={{
                fontSize: '10px'
              }}>
                <div style={{
                  height: '6px',
                  width: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'blue',
                  display: 'inline-block',
                  marginRight: '5px'
                }} />
                Online</Typography>
              <Typography style={{
                fontSize: '10px'
              }}>
                {message.time}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.messages}>
        <Box sx={{
          flex: '1 1 auto',
          overflowY: 'auto',
        }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: message.name === 'John Doe' ? 'flex-start' : 'flex-end',
                marginBottom: '20px',
              }}
            >
              <Box sx={{
                display: 'flex', alignItems: 'center', gap: '10px',
                flexDirection: message.name === 'John Doe' ? 'row' : 'row-reverse'
              }}>
                <img src={message.profile} alt="" height="40px" width="40px" style={{ borderRadius: '50%' }} />
                <Box sx={{
                  backgroundColor: message.name === 'John Doe' ? '#f5f5f5' : 'black',
                  color: message.name === 'John Doe' ? 'black' : 'white',
                  padding: '10px',
                  borderRadius: '50px',
                }}>
                  <Typography style={{
                    fontSize: '12px'
                  }}>{message.message}</Typography>
                </Box>
                <Typography variant="caption" sx={{ mt: '5px', color: 'gray' }}>
                  {message.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.footer}>
        <IconButton style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '10%',
          padding: '4px'
        }}>
          <AddIcon />
        </IconButton>
        <TextField
          placeholder="Type a message"
          className={classes.textField}
          InputProps={{ disableUnderline: true }}
        />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px'
        }}>
          <IconButton>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <IconButton style={{
            fontSize: '14px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10%',
            width: '85px',
            height: '30px'
          }}>
            Send &nbsp;
            <SendIcon sx={{
              fontSize: '18px',
            }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
