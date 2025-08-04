import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null); // State for username

  // Fetch username from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser); // Set username if it exists in localStorage
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Display "Hello, {username}" */}
        {user && <h1 className="navbar-logo">Hello, {user}! 🔥</h1>}

        {/* Menu is always visible and horizontal */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/explore" 
              className="navbar-link"
              onClick={() => console.log('Explore clicked')}
            >
              Explore 🔭
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/planner" 
              className="navbar-link"
              onClick={() => console.log('Trip Planner clicked')}
            >
              Trip Planner🧳
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/games" 
              className="navbar-link"
              onClick={() => console.log('Games clicked')}
            >
              Games 🎮
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/privacy" 
              className="navbar-link"
              onClick={() => console.log('Privacy clicked')}
            >
              Privacy 🪪
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;





