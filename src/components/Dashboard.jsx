import React from 'react';
import { useAuth } from "../authContext/AuthProvider";

function Dashboard() {
  const { user, role, logOut } = useAuth();

  return (
    <div>
      <h1>Welcome, {user}</h1>
      <h2>You are logged in as: {role === 'admin' ? 'Admin' : 'Student'}</h2>
      {role === 'admin' ? (
        <div>
          <p>Admin content here</p>
          {/* Add more admin-specific content */}
        </div>
      ) : (
        <div>
          <p>Student content here</p>
          {/* Add more student-specific content */}
        </div>
      )}
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default Dashboard;
