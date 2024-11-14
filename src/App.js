// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <div>
      <h1>Welcome to Our React App!</h1>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
      </Routes>
    </div>
  );
};

export default App;