import { Divider, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPlus, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MessageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 5px
`;

const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 10px 5px 10px;
`;

const MessageSection = styled(Box)`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 15px 10px 10px 10px;
`;

const Footer = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
`;

const Chat = ({ messages, socket }) => {
  const message = {
    id: 1,
    name: 'John Doe',
    profile: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '12:00 PM',
  }
  const [messageText, setMessageText] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const sendMessage = () => {
    const message = {
      action: 'send',
      data: {
        messageText: messageText,
        sentBy: 'admin',
        sentTo: '3',
        readBy: [],
        users: ['admin', '3']
      }
    };

    socket.send(JSON.stringify(message));
    setMessageText('');
  };

  const formatDateString = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = new Date(dateString).toLocaleTimeString('en-US', options);
    return formattedTime;
  };


  return (
    <MessageContainer>
      <HeaderContainer>
        <Box>
          <img src={message.profile} alt="" height='40px' width='40px' style={{
            borderRadius: '50%',
          }} />
        </Box>
        <Box sx={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
        }}>
          <span>{message.name}</span>
          <Box>
            <div style={{
              height: '6px',
              width: '6px',
              borderRadius: '50%',
              backgroundColor: 'blue',
              display: 'inline-block',
              marginRight: '5px'
            }} />
            <span style={{
              fontSize: '12px',
              color: '#9e9e9e',
              marginRight: '5px'
            }}>Online</span>
            <span style={{
              fontSize: '12px',
              color: '#9e9e9e',
            }}>{message.time}</span>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}>
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faEnvelope} />
        </Box>
      </HeaderContainer>
      <Divider />
      <MessageSection>
        {messages.map((message) => (
          <>
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: (user.userType == 'admin' && message.sentBy == 'admin') || message.sentBy == user.id ? 'flex-end' : 'flex-start',
                marginBottom: '20px',
              }}
            >
              <Box sx={{
                display: 'flex', alignItems: 'center', gap: '10px',
                flexDirection: (user.userType == 'admin' && message.sentBy == 'admin') || message.sentBy == user.id ? 'row-reverse' : 'row'
              }}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" height="40px" width="40px" style={{ borderRadius: '50%' }} />
                <Box sx={{
                  backgroundColor: (user.userType == 'admin' && message.sentBy == 'admin') || message.sentBy == user.id ? '#f5f5f5' : 'black',
                  color: (user.userType == 'admin' && message.sentBy == 'admin') || message.sentBy == user.id ? 'black' : 'white',
                  padding: '10px',
                  borderRadius: '50px',
                }}>
                  <span style={{
                    fontSize: '14px',
                  }}>{message.messageText}</span>
                </Box>
                <span style={{
                  fontSize: '12px',
                  color: '#9e9e9e'
                }}>{formatDateString(message.createdAt)}</span>
              </Box>
            </Box>
          </>
        ))}
      </MessageSection>

      <Footer>
        <Box sx={{
          padding: '9px',
          borderRadius: '10px',
          width: '15px',
          height: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}><FontAwesomeIcon icon={faPlus} /></Box>
        <TextField
          style={{
            flex: '1 1 auto',
          }}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message"
          InputProps={{ disableUnderline: true }}
        />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <FontAwesomeIcon icon={faFaceSmile} style={{
            color: 'black'
          }} />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            padding: '9px',
            gap: '6px',
          }}
            onClick={sendMessage}
          >
            <span>
              Send
            </span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </Box>
        </Box>
      </Footer>
    </MessageContainer >
  );
};

export default Chat;
