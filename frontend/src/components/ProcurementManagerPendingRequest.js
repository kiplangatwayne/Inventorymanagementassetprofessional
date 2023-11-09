import React, { useState, useEffect } from 'react';

function ManagerPendingRequests() {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const fetchPendingRequests = async () => {
    try {
      const response = await fetch('/manager_pending_requests', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setPendingRequests(data.pending_requests);
      } else {
        console.error('Failed to fetch pending requests');
      }
    } catch (error) {
      console.error('Error fetching pending requests:', error);
    }
  };

  return (
    <div>
      <h1>Manager Pending Requests</h1>
      <ul>
        {pendingRequests.map((request) => (
          <li key={request.id}>
            Request ID: {request.id}
            Reason: {request.reason}
            Quantity: {request.quantity}
            Urgency: {request.urgency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerPendingRequests;
