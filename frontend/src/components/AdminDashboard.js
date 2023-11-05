import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddAsset from './AddAsset';
import AllocateAsset from './AllocateAsset';
import ManagerPendingRequest from './ManagerPendingRequest';
import ManagerCompleteRequest from './ManagerCompleteRequest';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="add-asset" className="nav-link">Add Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="allocate_asset" className="nav-link">Allocate Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="pending-requests" className="nav-link">View Pending Requests</Link>
          </li>
          <li className="nav-item">
            <Link to="completed-requests" className="nav-link">View Completed Requests</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="add-asset" element={<AddAsset />} />
        <Route path="allocate-asset" element={<AllocateAsset />} />
        <Route path="pending-requests" element={<ManagerPendingRequest />} />
        <Route path="completed-requests" element={<ManagerCompleteRequest />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
