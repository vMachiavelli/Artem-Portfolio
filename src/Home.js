import React from 'react';
import './Styles.css';

const Home = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <h2>Connect With Me</h2>
        <div className="connections">
          <div className = "logos">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/174857.png" alt="LinkedIn Logo" className="scalable-logo" />
            </a>
            <a href ="https://github.com/vMachiavelli" target = "_blank" rel = "noopner noreferrer" >
              <img src = "/Octicons-mark-github.svg" alt = "githHub logo" className = "scalable-logo" />
            </a>
          </div>
            <p>Email 1: <a href="mailto:email1@example.com">anosovm@ualberta.ca</a></p>
            <p></p>
            <p>Email 2: <a href="mailto:email2@example.com">anosovartemiy9@gmail.com</a></p>
        </div>
      </div>

      <div className="main-content">
        <div className="tabs">
          <button className="tab-button active">Projects</button>
        </div>
        <div className="tab-content">
          <div className="tab-panel active">
            <h1>Projects</h1>
            <p>List your projects here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
