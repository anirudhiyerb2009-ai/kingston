import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      <div className="welcome-banner">
        <div className="logo-container">
          <img src={require('../assets/kingston-logo.png')} alt="City of Kingston Logo" className="logo" />
          <div className="logo-glow"></div>
        </div>
        <h1 className="main-title">
          <span className="title-word">WELCOME</span>
        </h1>
        <h2 className="sub-title">
          <span className="subtitle-highlight">TO THE CITY OF</span>
          <span className="subtitle-main">KINGSTON</span>
          <span className="subtitle-highlight">EXPLORER</span>
          <span className='subtitle-icon'>🙏</span>
        </h2>
        <div className="auth-buttons">
          <Link to="/signup" className="btn btn-signup">
            <span className="btn-text">Sign Up</span>
            <div className="btn-icon">→</div>
            <div className="btn-ripple"></div>
          </Link>
          <Link to="/signin" className="btn btn-signin">
            <span className="btn-text">Sign In</span>
            <div className="btn-icon">→</div>
            <div className="btn-ripple"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
