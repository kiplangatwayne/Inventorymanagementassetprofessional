import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ApproveAssetRequest from './ApproveAssetRequest';

function ProcurementDashboard() {
    return (
      <div>
        <h1>Procurement Dashboard</h1>
        <nav>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="approve-asset-request" className="nav-link">Approve Asset Request</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="approve-asset-request" element={<ApproveAssetRequest />} />
        </Routes>
      </div>
    );
  }
  
  export default ProcurementDashboard;