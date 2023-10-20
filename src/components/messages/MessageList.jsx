import { Box } from "@mui/material";
import Message from "./MessageItem";

const MESSAGE_DATA = [
  {
    id: 1,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 2,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 3,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 4,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 5,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 6,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 7,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  },
  {
    id: 8,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  }
]

const MessageList = () => {
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
      {MESSAGE_DATA.map((message) => (
        <Message key={message.id} item={message} />
      ))}
    </Box>
  );

}

export default MessageList;
