import React, { useState, useEffect } from 'react';

function ApproveAssetRequest() {
  const [assetRequests, setAssetRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [declinedRequests, setDeclinedRequests] = useState([]);

  useEffect(() => {
    // Fetch asset requests from an API or other source and populate 'assetRequests'.
    fetchAssetRequests();
  }, []);

  const fetchAssetRequests = async () => {
    try {
      const response = await fetch('/api/asset-requests');
      if (response.status === 200) {
        const data = await response.json();
        setAssetRequests(data);
      } else {
        console.error('Failed to fetch asset requests');
      }
    } catch (error) {
      console.error('Error fetching asset requests:', error);
    }
  };

  const handleApproveRequest = async (requestId) => {
    try {
      // Send a request to the server to approve the request with the given 'requestId'.
      const response = await fetch(`/api/approve-request/${requestId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Request approved successfully, update the state.
        const approvedRequest = assetRequests.find((request) => request.id === requestId);
        setApprovedRequests([...approvedRequests, approvedRequest]);
        const updatedAssetRequests = assetRequests.filter((request) => request.id !== requestId);
        setAssetRequests(updatedAssetRequests);
      } else {
        console.error('Failed to approve the request');
      }
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleDeclineRequest = async (requestId) => {
    try {
      // Send a request to the server to decline the request with the given 'requestId'.
      const response = await fetch(`/api/decline-request/${requestId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Request declined successfully, update the state.
        const declinedRequest = assetRequests.find((request) => request.id === requestId);
        setDeclinedRequests([...declinedRequests, declinedRequest]);
        const updatedAssetRequests = assetRequests.filter((request) => request.id !== requestId);
        setAssetRequests(updatedAssetRequests);
      } else {
        console.error('Failed to decline the request');
      }
    } catch (error) {
      console.error('Error declining request:', error);
    }
  };

  return (
    <div>
      <h1>Approve Asset Requests</h1>
      <h2>Requests to Approve</h2>
      <ul>
        {assetRequests.map((request) => (
          <li key={request.id}>
            Requested by: {request.user}
            Requested item: {request.item}
            <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
            <button onClick={() => handleDeclineRequest(request.id)}>Decline</button>
          </li>
        ))}
      </ul>

      <h2>Approved Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Requested by</th>
            <th>Requested item</th>
            {/* Add other request details as needed */}
          </tr>
        </thead>
        <tbody>
          {approvedRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.user}</td>
              <td>{request.item}</td>
              {/* Add other request details as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Declined Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Requested by</th>
            <th>Requested item</th>
            {/* Add other request details as needed */}
          </tr>
        </thead>
        <tbody>
          {declinedRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.user}</td>
              <td>{request.item}</td>
              {/* Add other request details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveAssetRequest;
