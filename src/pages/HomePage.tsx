import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area for the home page.</p>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><a href="/profile">Go to Profile</a></li>
          <li><a href="/settings">Go to Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;