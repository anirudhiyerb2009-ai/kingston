import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Assuming you have a CSS file for styling

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    const storedUser = localStorage.getItem(formData.username);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.password === formData.password) {
        // Store username in localStorage after successful sign-in
        localStorage.setItem("username", formData.username);
        setIsLoading(false);
        navigate('/explore');
      } else {
        setErrorMessage('Incorrect password');
        setIsLoading(false);
      }
    } else {
      setErrorMessage('User does not exist. Please sign up.');
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container signin-theme">
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <div className="auth-banner">
        <div className="auth-header">
          <button onClick={() => navigate('/')} className="back-btn">
            Back
          </button>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your Kingston account</p>
        </div>

        {errorMessage && (
          <div className="error-message">
            <span className="error-icon">⚠ </span>
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Username 👤</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your username"
              />
              <div className="input-focus-line"></div>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Password 🔒</label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your password"
              />
              <div className="input-focus-line"></div>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-label">Remember me</span>
            </label>
            <button type="button" className="link-btn forgot-password">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Signing In...
              </>
            ) : (
              <>
                <span>Sign In</span>
                <span className="btn-icon">→</span>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? 
            <button onClick={() => navigate('/signup')} className="link-btn">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;




