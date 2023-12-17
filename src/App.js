// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Change the import statement
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Change from Switch to Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
