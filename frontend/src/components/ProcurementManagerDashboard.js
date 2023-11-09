import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ApproveAssetRequest from './ApproveAssetRequest';
import AddData from './AddData';
import AllocateAsset from './AllocateAsset'; 
import AddAsset from './AddAsset';
import ManagerCompletedRequest from './ProcurementManagerCompletedRequest';
import ManagerPendingRequests from './ProcurementManagerPendingRequest'; 

function ProcurementDashboard() {
  return (
    <div>
      <h1>Procurement Dashboard</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="asset-request" className="nav-link">
              Approve Asset Request
            </Link>
          </li>
          <li className="nav-item">
            <Link to="add-data" className="nav-link">
              Add Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="allocate-asset" className="nav-link">
              Allocate Asset
            </Link>
          </li>
          <li className="nav-item">
            <Link to="add-asset" className="nav-link">
              Add Asset
            </Link>
          </li>
          <li className="nav-item">
            <Link to="completed_request" className="nav-link">
              Manager Completed Request
            </Link>
          </li>
          <li className="nav-item">
            <Link to="pending_requests" className="nav-link">
              Manager Pending Requests
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="add-data" element={<AddData />} />
        <Route path="asset-request" element={<ApproveAssetRequest />} />
        <Route path="allocate-asset" element={<AllocateAsset />} />
        <Route path="add-asset" element={<AddAsset />} />
        <Route path="completed_request" element={<ManagerCompletedRequest />} />
        <Route path="pending_requests" element={<ManagerPendingRequests />} /> {}
      </Routes>
    </div>
  );
}

export default ProcurementDashboard;
