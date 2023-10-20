import { Box, Chip, Typography } from "@mui/material";

const MessageItem = ({ item }) => {
  const {
    id,
    name,
    profile,
    message,
    time
  } = item;

  const truncatedMessage = message.length > 17 ? `${message.slice(0, 17)}...` : message;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '15px',
      margin: '10px 0 10px 0',
      alignItems: 'center',
      padding: '10px 0 10px 0',
      borderBottom: '1px solid #e0e0e0',
    }}>
      <Box>
        <img src={profile} alt="user" height="40px" width="40px" style={{ borderRadius: '50%' }} />
      </Box>
      <Box sx={{
        flex: 2,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box>
          <Typography sx={{
            fontSize: '14px',
            fontWeight: 'bold',
          }}>{name}</Typography>
        </Box>
        <Box>
          <Typography sx={{
            fontSize: "13px",

          }}>{truncatedMessage}</Typography>
        </Box>
      </Box>
      <Box sx={{
        flexDirection: 'column',
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Chip
            label="New"
            sx={{
              width: 50,
              height: 15,
              fontSize: '10px',
              borderRadius: 10,
            }}
          />
        </Box>
        <Box>
          <Typography sx={{
            fontSize: '10px'
          }}>{time}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MessageItem;
