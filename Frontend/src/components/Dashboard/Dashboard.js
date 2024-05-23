import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock user data (this should be fetched from the backend)
  const user = { name: 'John Doe', role: 'Teacher' };

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
      <nav>
        <ul>
          <li><Link to="/attendance">Manage Attendance</Link></li>
          <li><Link to="/schedule">Manage Schedule</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
