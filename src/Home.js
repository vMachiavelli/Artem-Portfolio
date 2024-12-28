import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`} id="app">
      <div className="switch-container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            checked={theme === 'dark'}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="sidebar">
        <div className="bio-section">
          <img
            src="YOUR_PROFILE_PICTURE.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Your Name</h2>
          <p className="bio-text">
            I’m an aspiring software engineer at the University of Alberta,
            graduating in 2026 and an active member of the software team for
            the U of A Rocketry Group. My passion lies in building real-world
            solutions and experimenting with new technologies—whether through
            personal coding projects or high-stakes aerospace collaborations.
            I’m always eager to explore fresh challenges, learn from others,
            and make a positive impact through software.
          </p>
        </div>
        <h3 className="connect-title">Connect With Me</h3>
        <div className="logos">
          <a href="#" target="_blank" rel="noreferrer">
            <img src="linkedin.png" alt="LinkedIn" className="scalable-logo" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="github.png" alt="GitHub" className="scalable-logo" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="other.png" alt="Other" className="scalable-logo" />
          </a>
        </div>
      </div>

      <div className="main-content">
        <h1>Welcome</h1>
        <p>
          Welcome to my portfolio site! Here, you’ll find information about my
          background, skills, and the projects I’ve worked on or collaborated on.
          Feel free to explore, and don’t hesitate to reach out if you’d like
          to connect.
        </p>
      </div>
    </div>
  );
}

export default App;
