import React, { Component } from 'react';

class AssetRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestReason: '',
      requestQuantity: '',
      requestUrgency: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

   
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);

    if (!token) {
      this.setState({ error: 'No token found. Please log in first.' });
      return;
    }

    const requestData = {
      reason: this.state.requestReason,
      quantity: this.state.requestQuantity,
      urgency: this.state.requestUrgency,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5OTUzNDY4OCwianRpIjoiOGFkMGRjZjItN2I4My00MDQ1LWEyMTgtZmM2OThmNDg2ZDU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyX2lkIjoxNCwicm9sZSI6Ik5vcm1hbCBVc2VyIn0sIm5iZiI6MTY5OTUzNDY4OCwiZXhwIjoxNjk5NjIxMDg4fQ.5IZGCLkO1uHv9BRsaayqF4DA5XZcnj_KF8BkiPI7zBI`,
    };

    const apiEndpoint = 'http://127.0.0.1:5000/request_asset';

    fetch(apiEndpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit request. Please check the data and try again.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Request successful:', data);
        this.setState({ error: null });
      })
      .catch(error => {
        console.error('Failed to submit request:', error);
        this.setState({ error: error.message });
      });

    console.log('Request sent:', requestData, headers, apiEndpoint);
  };

  render() {
    const { requestReason, requestQuantity, requestUrgency, error } = this.state;

    return (
      <div>
        <h1>Request Asset</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="requestReason"
            placeholder="Reason"
            value={requestReason}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="requestQuantity"
            placeholder="Quantity"
            value={requestQuantity}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="requestUrgency"
            placeholder="Urgency"
            value={requestUrgency}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit Request</button>
        </form>
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default AssetRequest;