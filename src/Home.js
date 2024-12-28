import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('about');

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`} id="app">
      
      {/* Dark Mode Switch */}
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

      {/* Sidebar (Minimal) */}
      <div className="sidebar">
        <img
          src="YOUR_PROFILE_PICTURE.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <h2>Your Name</h2>
        <p className="short-intro">
          Software Engineer @ UAlberta. Passionate about aerospace, coding,
          and hands-on solutions.
        </p>
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

      {/* Main Content with Tabs */}
      <div className="main-content">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
        <div className="tab-content">
          <div
            id="about"
            className={`tab-panel ${activeTab === 'about' ? 'active' : ''}`}
          >
            <h1>About Me</h1>
            <p>
              I’m an aspiring software engineer at the University of Alberta,
              graduating in 2026 and an active member of the software team
              for the U of A Rocketry Group. My passion lies in building
              real-world solutions and experimenting with new technologies—
              whether through personal coding projects or high-stakes
              aerospace collaborations. I’m always eager to explore fresh
              challenges, learn from others, and make a positive impact
              through software.
            </p>
          </div>
          <div
            id="projects"
            className={`tab-panel ${activeTab === 'projects' ? 'active' : ''}`}
          >
            <h1>Projects</h1>
            <p>Check out some of my favorite projects below:</p>
            <div className="project-list">
              <div className="project-card">
                <h3>Project One</h3>
                <p>A brief description of your project goes here.</p>
              </div>
              <div className="project-card">
                <h3>Project Two</h3>
                <p>Another project snippet or short summary goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
