// ChatPage.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, receiveMessage, deleteMessage, likeMessage } from '../actions/chatActions';
import socket from '../services/socket';
import ChatMessage from './ChatMessage';

const ChatPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      dispatch(receiveMessage(message));
    });
  }, [dispatch]);

  const handleSendMessage = () => {
    const newMessage = {
      id: Date.now(), // Unique identifier, you may use a library like uuid
      user: user.name,
      text: message,
    };
    dispatch(sendMessage(newMessage));
    socket.emit('message', newMessage);
    setMessage('');
  };

  const handleDeleteMessage = (messageId) => {
    dispatch(deleteMessage(messageId));
    // Emit an event to the server for deleting the message
  };

  const handleLikeMessage = (messageId) => {
    dispatch(likeMessage(messageId));
    // Emit an event to the server for liking the message
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {chatHistory.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onDelete={handleDeleteMessage}
            onLike={handleLikeMessage}
          />
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;

