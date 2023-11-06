import { Box } from "@mui/material";
import Message from "./MessageItem";


const MessageList = ({ usersList, handleShowMessages }) => {
  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'scroll',
        paddingRight: '12px', // Adjust as needed to make room for the scrollbar
        marginRight: '-12px', // Compensate for the scrollbar width
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'black',
        },
      }}
    >
      {usersList.map((data) => (
        <Message key={data.id} item={data} handleShowMessages={handleShowMessages} />
      ))}
    </Box>
  );

}

export default MessageList;
