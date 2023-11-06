import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('user_role');
    
    if (!userRole) {
      navigate('/login');
    } else {
      switch (userRole) {
        case 'admin':
          navigate('/dashboard/admin');
          break;
        case 'normalEmployee':
          navigate('/dashboard/normalemployee');
          break;
        case 'procurementManager':
          navigate('/dashboard/procurement');
          break;
        default:
          navigate('/login');
      }
    }
  }, [navigate]);

  return null;
}

export default Dashboard;