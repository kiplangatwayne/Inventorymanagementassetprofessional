import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllocateAsset from './components/AllocateAsset';
import AddAsset from './components/AddAsset';
import RequestAsset from './components/RequestAsset';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import ProcurementManagerDashboard from './components/ProcurementManagerDashboard';
import NormalEmployeeDashboard from './components/NormalEmployeeDashboard';
import UserCompletedRequests from './components/UserCompletedRequests';
import ActiveRequests from './components/ActiveRequests';
import ManagerPendingRequest from './components/ManagerPendingRequest';
import ManagerCompleteRequest from './components/ManagerCompleteRequest';
import ApproveAssetRequest from './components/ApproveAssetRequest';
import Dashboard from './components/Dashboard';

function App() {
  const userRole = localStorage.getItem('user_role');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add_asset" element={<AddAsset />} />
          <Route path="/allocate_asset" element={<AllocateAsset />} />
          <Route path="/request_asset" element={<RequestAsset />} />
          <Route
            path="/dashboard/*"
            element={
              userRole === 'admin'
                ? <AdminDashboard />
                : userRole === 'normalEmployee'
                ? <NormalEmployeeDashboard />
                : userRole === 'procurementManager'
                ? <ProcurementManagerDashboard />
                : <Dashboard />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/pending-requests" element={<ManagerPendingRequest />} />
          <Route path="/admin/completed-requests" element={<ManagerCompleteRequest />} />
          <Route path="/admin/allocate-asset" element={<AllocateAsset />} />
          <Route path="/admin/add-asset" element={<AddAsset />} />
          <Route path="/procurement" element={<ProcurementManagerDashboard />} />
          <Route path="/procurement/approve-asset-request" element={<ApproveAssetRequest />} />
          <Route path="/normalemployee" element={<NormalEmployeeDashboard />} />
          <Route path="/normalemployee/request-asset" element={<RequestAsset />} />
          <Route path="/normalemployee/active-requests" element={<ActiveRequests />} />
          <Route path="/normalemployee/user-completed-requests" element={<UserCompletedRequests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
