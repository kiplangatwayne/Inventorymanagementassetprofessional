
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllocateAsset from './components/AllocateAsset';
import AddAsset from './components/AddAsset';
import RequestAsset from './components/RequestAsset';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard'; // Update the import path

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add_asset" element={<AddAsset />} />
          <Route path="/allocate_asset" element={<AllocateAsset />} />
          <Route path="/request_asset" element={<RequestAsset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
