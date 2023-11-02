import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation here

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/success'); // Redirect to a success page
      } else {
        const data = await response.json();
        setError(data.message); // Display registration error
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <body>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Employee">Employee</option>
            <option value="Procurement Manager">Procurement Manager</option>
            <option value="Admin">Admin</option>
            </select>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </body>
  );
}

export default Register;