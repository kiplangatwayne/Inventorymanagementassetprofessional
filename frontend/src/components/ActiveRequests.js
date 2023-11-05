import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ActiveRequests = () => {
  const [requests, setRequests] = useState([]); // Initialize with an empty array of requests

  // Function to delete a request
  const handleDeleteRequest = (requestId) => {
    // Implement the logic to delete a request by its ID here
    // For example:
    const updatedRequests = requests.filter((request) => request.id !== requestId);
    setRequests(updatedRequests);
  };

  // Function to edit a request
  const handleEditRequest = (requestId) => {
    // Implement the logic to edit a request by its ID here
    // For example, you can open a modal or navigate to an edit page.
  };

  return (
    <div>
      <h1>Active Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Asset Name</th>
            <th>Reason</th>
            <th>Quantity</th>
            <th>Urgency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.reason}</td>
              <td>{request.quantity}</td>
              <td>{request.urgency}</td>
              <td>
                <button onClick={() => handleEditRequest(request.id)}>Edit</button>
                <button onClick={() => handleDeleteRequest(request.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveRequests;
