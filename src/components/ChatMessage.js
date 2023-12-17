// ChatMessage.js
import React from 'react';

const ChatMessage = ({ message, onDelete, onLike }) => {
  return (
    <div>
      <p>{message.user}: {message.text}</p>
      <button onClick={() => onDelete(message.id)}>Delete</button>
      <button onClick={() => onLike(message.id)}>Like</button>
    </div>
  );
};

export default ChatMessage;

