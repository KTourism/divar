// import React from 'react';

const SettingPage = () => {
  return (
    <div>
      <h1>Welcome to the Setting Page</h1>
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

export default SettingPage;