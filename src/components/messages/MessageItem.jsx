import { Box, Chip, Typography } from "@mui/material";

const MessageItem = ({ item, handleShowMessages }) => {
  const {
    id,
    username,
    lastMessage,
  } = item;

  const truncatedMessage = lastMessage.messageText.length > 17 ? `${lastMessage.messageText.slice(0, 17)}...` : lastMessage.messageText;
  const formatDateTimeString = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  };
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      gap: '15px',
      margin: '10px 0 10px 0',
      alignItems: 'center',
      padding: '10px 0 10px 0',
      borderBottom: '1px solid #e0e0e0',
    }} onClick={() => handleShowMessages(id)}>
      <Box>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="user" height="40px" width="40px" style={{ borderRadius: '50%' }} />
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
          }}>{username}</Typography>
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
            fontSize: '12px'
          }}>{formatDateTimeString(lastMessage.createdAt)}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MessageItem;
