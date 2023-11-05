import React, { Component } from 'react';


class AllocateAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assetId: '',
      employeeName: '', // Changed field name to match the backend
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const { assetId, employeeName } = this.state;

    try {
      const response = await fetch(`http://127.0.0.1:5000/allocate_asset/{asset_id}${assetId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Normal_Employee_name: employeeName }),
      });

      if (response.ok) {
        // Successful allocation, you can redirect to a success page or update UI accordingly.
      } else {
        const data = await response.json();
        // Handle error response, e.g., display an error message.
        console.error(data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Allocate Asset</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="assetId"
            placeholder="Asset ID"
            value={this.state.assetId}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={this.state.employeeName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Allocate Asset</button>
        </form>
      </div>
    );
  }
}

export default AllocateAsset;
