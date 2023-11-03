import React, { Component } from 'react';

class ManagerPendingRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingRequests: [],
    };
  }

  componentDidMount() {
    this.fetchPendingRequests();
  }

  fetchPendingRequests = () => {
    // Replace this with your actual API request to fetch pending requests
    fetch('/api/pending-requests') // Update the URL as needed
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pendingRequests: data });
      })
      .catch((error) => {
        console.error('Error fetching pending requests: ', error);
      });
  };

  render() {
    return (
      <div>
        <h1>Manager Pending Requests</h1>
        <ul>
          {this.state.pendingRequests.map((request) => (
            <li key={request.id}>
              <p>Request ID: {request.id}</p>
              <p>User: {request.user}</p>
              {/* Add more request details as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ManagerPendingRequest;