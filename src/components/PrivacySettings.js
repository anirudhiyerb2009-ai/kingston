// PrivacySettings.js
import React, { useState } from "react";
import Navbar from './Navbar'; // Adjust the path if necessary

function PrivacySettings() {
  const [notifications, setNotifications] = useState(true);

  // Handle delete account
  const deleteAccount = () => {
    // Clear user data (assuming you're using localStorage to store user info)
    localStorage.removeItem("username");
    alert("Your account has been deleted.");
    window.location.href = "/"; // Redirect to home page after account deletion
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4CAF50 0%, #2196F3 35%, #FFEB3B 70%, #FF9800 100%)',
    position: 'relative',
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 20% 80%, rgba(255, 235, 59, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 40% 40%, rgba(33, 150, 243, 0.15) 0%, transparent 40%)
    `,
    zIndex: 1,
    pointerEvents: 'none',
  };

  const contentContainerStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    padding: '20px',
  };

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(25px)',
    borderRadius: '35px',
    padding: '60px',
    border: '2px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 100px rgba(76, 175, 80, 0.1)',
    maxWidth: '600px',
    width: '100%',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '3.2rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '40px',
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  };

  const settingsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginTop: '20px',
  };

  const notificationSettingStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '25px',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const notificationLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.95)',
    cursor: 'pointer',
  };

  const customCheckboxStyle = {
    position: 'relative',
    width: '60px',
    height: '30px',
    background: notifications 
      ? 'linear-gradient(135deg, #4CAF50, #8BC34A)' 
      : 'rgba(255, 255, 255, 0.2)',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: `2px solid ${notifications ? 'rgba(76, 175, 80, 0.8)' : 'rgba(255, 255, 255, 0.3)'}`,
    boxShadow: notifications ? '0 0 20px rgba(76, 175, 80, 0.4)' : 'none',
  };

  const checkboxToggleStyle = {
    position: 'absolute',
    top: '2px',
    left: notifications ? '30px' : '2px',
    width: '22px',
    height: '22px',
    background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
    borderRadius: '50%',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  };

  const deleteButtonStyle = {
    background: 'linear-gradient(135deg, #f44336 0%, #d32f2f 50%, #b71c1c 100%)',
    color: 'white',
    border: 'none',
    padding: '18px 40px',
    fontSize: '1.2rem',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 8px 25px rgba(244, 67, 54, 0.3)',
    marginTop: '20px',
  };

  const deleteWarningStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9rem',
    marginTop: '15px',
    fontStyle: 'italic',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  };

  // CSS animations
  const cssAnimations = `
    @keyframes privacyFloat {
      0%, 100% { 
        transform: translateX(0px) translateY(0px) rotate(0deg);
        opacity: 0.6;
      }
      25% { 
        transform: translateX(30px) translateY(-20px) rotate(2deg);
        opacity: 0.9;
      }
      50% { 
        transform: translateX(-20px) translateY(25px) rotate(-1deg);
        opacity: 0.7;
      }
      75% { 
        transform: translateX(15px) translateY(-15px) rotate(1deg);
        opacity: 0.8;
      }
    }

    @keyframes bellSwing {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-15deg); }
      75% { transform: rotate(15deg); }
    }

    @keyframes lockRotate {
      0%, 100% { 
        transform: rotate(0deg);
        opacity: 1;
      }
      25% { 
        transform: rotate(-10deg);
        opacity: 0.8;
      }
      75% { 
        transform: rotate(10deg);
        opacity: 0.9;
      }
    }

    .privacy-background-overlay {
      animation: privacyFloat 20s ease-in-out infinite;
    }

    .privacy-notification-setting:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(76, 175, 80, 0.5);
    }

    .privacy-delete-button:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 15px 40px rgba(244, 67, 54, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .privacy-delete-button:active {
      transform: translateY(-1px) scale(1.02);
    }

    .bell-icon {
      display: inline-block;
      animation: bellSwing 2s ease-in-out infinite;
    }

    .lock-icon {
      display: inline-block;
      animation: lockRotate 3s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      .privacy-content {
        padding: 40px 25px !important;
        margin: 0 15px !important;
      }
      
      .privacy-title {
        font-size: 2.5rem !important;
      }
      
      .privacy-notification-setting {
        padding: 20px !important;
      }
      
      .privacy-notification-label {
        font-size: 1.1rem !important;
      }
      
      .privacy-delete-button {
        padding: 15px 30px !important;
        font-size: 1.1rem !important;
      }
    }

    @media (max-width: 480px) {
      .privacy-content {
        padding: 30px 20px !important;
      }
      
      .privacy-title {
        font-size: 2rem !important;
      }
      
      .privacy-notification-label {
        font-size: 1rem !important;
        gap: 10px !important;
      }
      
      .privacy-custom-checkbox {
        width: 50px !important;
        height: 25px !important;
      }
      
      .privacy-checkbox-toggle {
        width: 19px !important;
        height: 19px !important;
      }
      
      .privacy-checkbox-toggle.checked {
        left: 25px !important;
      }
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <div style={containerStyle}>
        <div style={backgroundOverlayStyle} className="privacy-background-overlay"></div>
        <Navbar />
        <div style={contentContainerStyle}>
          <div style={contentStyle} className="privacy-content">
            <h1 style={titleStyle} className="privacy-title">
              <span className="lock-icon">🔒</span> Privacy Settings ⚙️
            </h1>
            
            <div style={settingsContainerStyle}>
              <div 
                style={notificationSettingStyle} 
                className="privacy-notification-setting"
              >
                <label 
                  style={notificationLabelStyle} 
                  className="privacy-notification-label"
                  onClick={() => setNotifications(!notifications)}
                >
                  <span className="bell-icon">🔔</span>
                  Enable Notifications
                  <div style={customCheckboxStyle} className="privacy-custom-checkbox">
                    <div 
                      style={checkboxToggleStyle} 
                      className={`privacy-checkbox-toggle ${notifications ? 'checked' : ''}`}
                    ></div>
                  </div>
                </label>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  style={{ display: 'none' }}
                />
              </div>

              <div>
                <button 
                  onClick={deleteAccount} 
                  style={deleteButtonStyle}
                  className="privacy-delete-button"
                >
                  ⚠️ Delete Account 🗑️
                </button>
                <div style={deleteWarningStyle}>
                  This action cannot be undone. All your data will be permanently deleted.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacySettings;


