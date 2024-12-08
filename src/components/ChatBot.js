import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

function ChatBot() {
  const [open, setOpen] = useState(false);  // Controls whether the chat window is open
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', fromBot: true }
  ]);
  const [userMessage, setUserMessage] = useState('');

  // Function to open/close chat window
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle user input and display bot response
  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      // Add user message to the chat
      setMessages([...messages, { text: userMessage, fromBot: false }]);

      // Bot's simple response
      const botResponse = 'Thanks for your message! We will get back to you soon.';
      setMessages([...messages, { text: userMessage, fromBot: false }, { text: botResponse, fromBot: true }]);

      // Clear input field
      setUserMessage('');
    }
  };

  return (
    <div>
      {/* ChatBot Icon */}
      <div
        onClick={handleClickOpen}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ChatIcon style={{ color: 'white', fontSize: '30px' }} />
      </div>

      {/* Chat Window */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent style={{ padding: '10px' }}>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ textAlign: message.fromBot ? 'left' : 'right' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '10px',
                    backgroundColor: message.fromBot ? '#f1f1f1' : '#4CAF50',
                    color: message.fromBot ? '#000' : '#fff',
                    borderRadius: '20px',
                    margin: '5px 0',
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <TextField
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            label="Type your message"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendMessage} color="primary">
            Send
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChatBot;
