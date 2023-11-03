import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserRequest from './UserRequest';  // Corrected import path
import ManagerPendingRequest from './ManagerPendingRequest';  // Corrected import path
// import ManagerCompleteRequest from './ManagerCompleteRequest';  // Corrected import path
import RequestAsset from './RequestAsset';



function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/userrequest">User Request</Link>
          </li>
          <li>
            <Link to="/dashboard/managerpendingrequest">Manager Pending Request</Link>
          </li>
          <li>
            <Link to="/dashboard/RequestAsset">Request Asset</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="userrequest" element={<UserRequest />} />
        <Route path="managerpendingrequest" element={<ManagerPendingRequest />} />
        <Route path="requestasset" element={<RequestAsset />} />
      </Routes>
    </div>
  );
}

export default Dashboard;




