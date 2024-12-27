import React from 'react';
import './Styles.css';

const Home = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <h2>Connect With Me</h2>
        <div className="connections">
          <div className = "logos">
            <a href="https://www.linkedin.com/in/artem-morozov-21017a275/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn Logo" className="scalable-logo" />
            </a>
            <a href ="https://github.com/vMachiavelli" target = "_blank" rel = "noopner noreferrer" >
              <img src = "/github-svgrepo-com.svg" alt = "githHub logo" className = "scalable-logo" />
            </a>
            <a href="mailto:anosovmo@ualberta.ca,anosovartemiy9@gmail.com" target = "_blank" rel = "noopner noreferrer" >
              <img src = "/gmail-svgrepo-com.svg" alt = "githHub logo" className = "scalable-logo" />
            </a>
          </div>
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
