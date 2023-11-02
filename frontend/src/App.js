import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the Routes component
import AllocateAsset from './components/AllocateAsset';
import AddAsset from './components/AddAsset';
import RequestAsset from './components/RequestAsset';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap your routes in a <Routes> component */}
          <Route path="/" element={<HomePage />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/add_asset" element={<AddAsset />} />
          <Route path="/allocate_asset" element={<AllocateAsset />} />
          <Route path="/request_asset" element={<RequestAsset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;