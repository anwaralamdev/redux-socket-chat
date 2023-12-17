// HomePage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const startChat = () => {
    const user = { name: 'John Doe' }; // Replace with user selection logic
    dispatch(setUser(user));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={startChat}>Start Chat</button>
    </div>
  );
};

export default HomePage;

