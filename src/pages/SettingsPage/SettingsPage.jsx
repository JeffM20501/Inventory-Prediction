import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './SettingsPage.css';

function SettingsPage() {
  // Get users from Outlet context
  const { users } = useOutletContext();

  // Active tab
  const [activeTab, setActiveTab] = useState("profile");

  // Profile fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Security fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Populate form when users data is available
  useEffect(() => {
    if (users && users.length > 0) {
      const user = users[0]; // using first user for demo
      setName(user.name || '');
      setEmail(user.email || '');
      setUsername(user.username || '');
      setPassword(user.password || '');
    }
  }, [users]);

  // Apply dark mode on mount
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const handleThemeToggle = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  };

  const saveProfile = () => {
    alert("Profile saved!");
  };

  const saveSecurity = () => {
    alert("Security saved!");
  };

  return (
    <div className="settings-page">
      {/* Tabs */}
      <div className="settings-tabs">
        {["profile", "security", "notifications", "appearance"].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "profile" ? "Profile" :
             tab === "security" ? "Account Security" :
             tab === "notifications" ? "Notifications" :
             "Appearance"}
          </button>
        ))}
      </div>

      <div className="settings-card">
        {/* Profile */}
        {activeTab === "profile" && (
          <div className="content">
            <h3>Profile Section</h3>
            <div className="avatar"></div>

            <label>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />

            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />

            <button className="save-btn" onClick={saveProfile}>Save Profile</button>
          </div>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <div className="content">
            <h3>Account Security</h3>

            <label>Username</label>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />

            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter new password" />

            <button className="save-btn" onClick={saveSecurity}>Save Security</button>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="content">
            <h3>Notifications</h3>

            <div className="toggle-item">
              <span>Two-Factor Authentication</span>
              <input type="checkbox" />
            </div>

            <div className="toggle-item">
              <span>Email Alerts</span>
              <input type="checkbox" />
            </div>

            <div className="toggle-item">
              <span>SMS Alerts</span>
              <input type="checkbox" />
            </div>

            <button className="save-btn">Save Notifications</button>
          </div>
        )}

        {/* Appearance */}
        {activeTab === "appearance" && (
          <div className="content">
            <h3>Appearance</h3>

            <div className="toggle-item">
              <span>Light / Dark Mode</span>
              <input type="checkbox" checked={darkMode} onChange={handleThemeToggle} />
            </div>

            <button className="save-btn" onClick={handleThemeToggle}>Apply Theme</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
