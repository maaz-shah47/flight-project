import { Box, Checkbox, Grid, Typography } from "@mui/material";
import ButtonWrapper from "../ButtonWrapper";
import SearchField from "../SearchField";
import CardWrapper from "../CardWrapper";
import MessageList from "./MessageList";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import MessageDialog from "./MessageDialog";
import config from "../../config";
import axios from "axios";

const extractUniqueUserIds = (messages) => {
  const usersWithAdmin = messages
    .filter(obj => obj.sentTo === 'admin')
    .map(obj => obj.sentBy);

  const uniqueUserIds = [...new Set(usersWithAdmin)];
  return uniqueUserIds;
};

const Messages = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [uniqueUserIds, setUniqueUserIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredMessageListData, setFilteredMessageListData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      let registerRequest;
      try {
        registerRequest = await axios.get(
          `${config.SERVER_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              ContentType: "application/json",
            },
          }
        );

        const { data: registerRequestData } = registerRequest;
        console.log("RegisterRequestData", registerRequestData);
        if (registerRequestData) {
          setLoader(false);
          setUsers(registerRequestData.users);
        }
      } catch ({ response }) {
        registerRequest = response;
        setLoader(false);
      }
    }

    getUsers();
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    const socket = new WebSocket(`ws://127.0.0.1:3300?token=Bearer%20${jwtToken}`); // Replace with your actual backend WebSocket URL

    socket.onopen = (event) => {
      console.log('WebSocket connection opened');
      console.log("ON OPEN", event);
    };

    socket.onmessage = (event) => {
      console.log('Received message:', event.data);

      // Handle incoming messages from the WebSocket server
      const message = JSON.parse(event.data);
      if (message.status === 'success') {
        if (message.allmessages && message.allmessages.length > 0) {
          console.log("IN ALL MESSAGES")
          setMessages(message.allmessages);
        }
      } else if (message.type === 'new') {
        setMessages(prevMessages => [...prevMessages, message.data]);
      } else if (message.status === 'error') {
        console.error('WebSocket error:', message.message);
      }
    };

    socket.onclose = (event) => {
      // Handle WebSocket connection closed
      console.log('Socket closed:', event);
    };

    socket.onerror = (error) => {
      // Handle WebSocket errors
      console.error('Socket error:', error);
    };

    setSocket(socket);
    return () => {
      // Close the WebSocket connection on unmounting the component
      socket.close();
    };
  }, []);

  useEffect(() => {
    console.log("MESSAGES CHANGED", messages);
    console.log("USERS: ", users);
    if (messages && messages.length > 0) {
      setUniqueUserIds(extractUniqueUserIds(messages));
    }
  }, [messages, users]);

  useEffect(() => {
    if (users && users.length > 0) {
      const filteredUsers = users.filter(user => uniqueUserIds.includes(user.id.toString()));
      console.log("FILTERED USERS", filteredUsers)
      const filteredUsersWithLastMessage = filteredUsers.map(user => {
        const messagesFromUser = messages.filter(
          message => message.sentBy === user.id.toString() || message.sentTo === user.id.toString()
        );

        console.log("MESSAGES FROM USER", messagesFromUser);
        let lastMessage;
        if (messagesFromUser.length > 0) {
          lastMessage = messagesFromUser.reduce((prev, current) => {
            const prevDate = new Date(prev.createdAt) > new Date(prev.updatedAt) ? new Date(prev.createdAt) : new Date(prev.updatedAt);
            const currentDate = new Date(current.createdAt) > new Date(current.updatedAt) ? new Date(current.createdAt) : new Date(current.updatedAt);
            return currentDate > prevDate ? current : prev;
          }, messagesFromUser[0]);
        }
        return {
          ...user, lastMessage: lastMessage ? {
            messageText: lastMessage.messageText,
            createdAt: lastMessage.createdAt,
          } : null
        };
      });

      console.log('Filtered users with last messages:', filteredUsersWithLastMessage);
      setFilteredMessageListData(filteredUsersWithLastMessage);
    }
  }, [users, uniqueUserIds, messages]);

  const handleOpenMessageDialog = () => {
    setOpen(true);
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setFilteredMessageListData(filteredMessageListData.filter(user => user.username.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleShowMessages = (userId) => {
    setUserId(userId);
    // const filteredMessages = messages.filter(message => {
    //   return message.sentBy === userId.toString() || message.sentTo === userId.toString()
    // });
    // setFilteredMessages(filteredMessages);
  }

  useEffect(() => {
    if (userId === null) return;
    const filteredMessages = messages.filter(message => {
      return message.sentBy === userId.toString() || message.sentTo === userId.toString()
    });
    setFilteredMessages(filteredMessages);
  }, [userId, messages]);

  return (
    <Grid container style={{
      height: '75vh'
    }}>
      <MessageDialog open={open} setOpen={setOpen} />
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
              <ButtonWrapper text="Create New" borderRadius="10px" onClick={handleOpenMessageDialog} />
            </Box>
          </Box>
        </Box>
        <Grid container sx={{
          mt: 2,
          gap: '20px',
        }}>
          <Grid item md={3}>
            <SearchField placeholder="Search" searchText={searchText} handleSearchChange={handleSearchChange} />
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
              <MessageList usersList={filteredMessageListData} handleShowMessages={handleShowMessages} />
            </CardWrapper>
          </Grid>
          <Grid item md={9} sx={{
            padding: '0 20px 0 20px',
          }}>
            <CardWrapper customStyles={{
              width: '100% important',
              height: '380px',
            }}>
              {filteredMessages.length > 0 ?
                <Chat messages={filteredMessages} socket={socket} />
                :
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <Typography variant="h6">No messages found</Typography>
                </Box>
              }

            </CardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Messages;
