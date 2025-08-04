import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    suburb: '',
    interests: '',
    referralSource: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'confirmPassword') {
      if (value !== formData.password) {
        setErrorMessage('Passwords do not match');
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    const existingUser = localStorage.getItem(formData.username);
    if (existingUser) {
      setErrorMessage('Username already exists! Please sign in.');
      setIsLoading(false);
      setTimeout(() => navigate('/signin'), 2000);
    } else {
      // Store the user data in localStorage
      localStorage.setItem(formData.username, JSON.stringify(formData));
      // Store the username separately to be fetched by Navbar
      localStorage.setItem("username", formData.username);
      setIsLoading(false);
      navigate('/explore');
    }
  };

  return (
    <div className="auth-container signup-theme">
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
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join the Kingston community today</p>
        </div>

        {errorMessage && (
          <div className="error-message">
            <span className="error-icon">⚠</span>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
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
              <label className="form-label">Email ✉️</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>
          </div>
          
          <div className="form-row">
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
                  placeholder="Create a password"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password 🔒</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Confirm your password"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Country 🌏</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your country"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">State 🏴󠁧󠁢󠁥󠁮󠁧󠁿</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your state"
                />
                <div className="input-focus-line"></div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Suburb 🇦🇺</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="suburb"
                value={formData.suburb}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your suburb"
              />
              <div className="input-focus-line"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">What interests you most about Kingston? 👍</label>
            <div className="input-wrapper">
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="3"
                placeholder="Tell us what interests you about Kingston..."
              />
              <div className="input-focus-line"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">How did you hear about us? 👂</label>
            <div className="input-wrapper">
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select an option ☑️</option>
                <option value="social">Social Media 📱</option>
                <option value="friend">Friend/Family 👥</option>
                <option value="search">Search Engine 🏠</option>
                <option value="other">Other 🤔</option>
              </select>
              <div className="input-focus-line"></div>
            </div>
          </div>

          <button type="submit" className="btn btn-submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Creating Account...
              </>
            ) : (
              <>
                <span>Create Account</span>
                <span className="btn-icon">✓</span>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? 
            <button onClick={() => navigate('/signin')} className="link-btn">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;




