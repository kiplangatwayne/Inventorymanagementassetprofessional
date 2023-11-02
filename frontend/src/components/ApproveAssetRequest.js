import React, { useState, useEffect } from 'react';

function ApproveAssetRequest() {
  const [assetRequests, setAssetRequests] = useState([]);

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
        // Request approved successfully, update the state or refetch data.
        fetchAssetRequests();
      } else {
        console.error('Failed to approve the request');
      }
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  return (
    <div>
      <h1>Approve Asset Requests</h1>
      <ul>
        {assetRequests.map((request) => (
          <li key={request.id}>
            Requested by: {request.user}
            Requested item: {request.item}
            <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
            {/* Add other request details and approval logic here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApproveAssetRequest;