import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('home');

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`} id="app">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div className="sidebar">
        <div className="bio-section">
          <img
            src="/1727220946716.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Your Name</h2>
          <p className="bio-text">
            I’m an aspiring software engineer at the University of Alberta, graduating in 2026 and
            an active member of the software team for the U of A Rocketry Group. My passion lies in
            building real-world solutions and experimenting with new technologies—whether through
            personal coding projects or high-stakes aerospace collaborations. I’m always eager to
            explore fresh challenges, learn from others, and make a positive impact through
            software.
          </p>
        </div>
        <h3 className="connect-title">Connect With Me</h3>
        <div className="logos">
          <a href="#" target="_blank" rel="noreferrer">
            <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" className="scalable-logo" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="github-svgrepo-com.svg" alt="GitHub" className="scalable-logo" />
          </a>
          <a href="mailto:anosovartemiy9@gmail.com,anosovmo@ualberta.ca" target="_blank" rel="noreferrer">
            <img src="gmail-svgrepo-com.svg" alt="Other" className="scalable-logo" />
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
        <div className="tab-content">
          <div id="home" className={`tab-panel ${activeTab === 'home' ? 'active' : ''}`}>
            <h1>Welcome</h1>
            <p>
              Welcome to my portfolio site! Here, you’ll find information about my background,
              skills, and the projects I’ve worked on or collaborated on. Feel free to explore,
              and don’t hesitate to reach out if you’d like to connect.
            </p>
          </div>
          <div id="projects" className={`tab-panel ${activeTab === 'projects' ? 'active' : ''}`}>
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
