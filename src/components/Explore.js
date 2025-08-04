import React from 'react';
import Navbar from './Navbar';

const Explore = () => {
  return (
    <div style={exploreContainerStyle}>
      <Navbar />
      <div style={exploreContainerBeforeStyle}></div>
      <div style={exploreContentContainerStyle}>
        <div style={exploreContentStyle}>
          <div style={exploreContentBeforeStyle}></div>
          <h2 style={exploreTitleStyle}>
            Explore Kingston, Melbourne
            <span style={starStyle}>🌟</span>
          </h2>
          <p style={exploreParagraphStyle}>
            Discover the best places to visit in Kingston, Melbourne!
          </p>
          
          <div style={explorePlacesSectionStyle}>
            <h3 style={exploreH3Style}>
              <span style={pinStyle}>📍</span>
              Best Places to Explore
            </h3>
            <ul style={explorePlacesListStyle}>
              <li style={{...exploreListItemStyle, ...exploreListItemOddStyle}}>
                Kingston Foreshore
                <div style={exploreListItemBeforeStyle}></div>
              </li>
              <li style={{...exploreListItemStyle, ...exploreListItemEvenStyle}}>
                Historic Kingston Town Centre
                <div style={exploreListItemBeforeStyle}></div>
              </li>
              <li style={{...exploreListItemStyle, ...exploreListItemOddStyle}}>
                Kingston Market
                <div style={exploreListItemBeforeStyle}></div>
              </li>
              <li style={{...exploreListItemStyle, ...exploreListItemEvenStyle}}>
                Kingston Park
                <div style={exploreListItemBeforeStyle}></div>
              </li>
              <li style={{...exploreListItemStyle, ...exploreListItemOddStyle}}>
                Corio Bay
                <div style={exploreListItemBeforeStyle}></div>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kingston+Melbourne"
              target="_blank"
              rel="noopener noreferrer"
              style={exploreMapsButtonStyle}
            >
              <div style={exploreMapsButtonBeforeStyle}></div>
              Open Google Maps 🗺️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const exploreContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 50%, #0D47A1 100%)',
  position: 'relative',
  overflow: 'hidden',
};

const exploreContainerBeforeStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `
    radial-gradient(circle at 30% 70%, rgba(255, 235, 59, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(3, 169, 244, 0.1) 0%, transparent 50%)
  `,
  zIndex: -1,
  animation: 'exploreFloat 15s ease-in-out infinite',
  pointerEvents: 'none',
};

const exploreContentContainerStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  padding: '20px',
};

const exploreContentStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  padding: '50px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  boxShadow: `
    0 25px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1)
  `,
  maxWidth: '800px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const exploreContentBeforeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '4px',
  background: 'linear-gradient(90deg, #FFEB3B, #4CAF50, #2196F3)',
  animation: 'progressSlide 3s linear infinite',
};

const exploreTitleStyle = {
  fontSize: '3.5rem',
  fontWeight: '900',
  color: 'white',
  marginBottom: '20px',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  animation: 'exploreTitle 4s ease-in-out infinite',
};

const starStyle = {
  position: 'absolute',
  top: '-15px',
  right: '-50px',
  fontSize: '2.5rem',
  animation: 'starTwinkle 2s ease-in-out infinite',
};

const exploreParagraphStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '1.3rem',
  marginBottom: '30px',
  fontWeight: '500',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  lineHeight: '1.6',
};

const explorePlacesSectionStyle = {
  marginTop: '40px',
  textAlign: 'left',
};

const exploreH3Style = {
  fontSize: '2.2rem',
  fontWeight: '700',
  color: 'white',
  marginBottom: '25px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  textAlign: 'center',
};

const pinStyle = {
  marginRight: '10px',
  animation: 'pinBounce 2s ease-in-out infinite',
};

const explorePlacesListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 30px 0',
};

const exploreListItemStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '15px',
  padding: '15px 20px',
  marginBottom: '12px',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '1.1rem',
  fontWeight: '500',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
};

const exploreListItemOddStyle = {
  borderLeft: '4px solid #FFEB3B',
};

const exploreListItemEvenStyle = {
  borderLeft: '4px solid #4CAF50',
};

const exploreListItemBeforeStyle = {
  position: 'absolute',
  top: 0,
  left: '-100%',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, rgba(255, 235, 59, 0.2), transparent)',
  transition: 'left 0.5s ease',
};

const exploreMapsButtonStyle = {
  display: 'inline-block',
  padding: '18px 35px',
  background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '50px',
  fontSize: '1.1rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '2px solid transparent',
  boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
};

const exploreMapsButtonBeforeStyle = {
  position: 'absolute',
  top: 0,
  left: '-100%',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
  transition: 'left 0.5s ease',
};

// Add CSS animations as a style tag
const animationStyles = `
@keyframes exploreFloat {
  0%, 100% { 
    transform: translateX(0px) translateY(0px) rotate(0deg);
    opacity: 0.5;
  }
  33% { 
    transform: translateX(20px) translateY(-10px) rotate(1deg);
    opacity: 0.8;
  }
  66% { 
    transform: translateX(-15px) translateY(15px) rotate(-1deg);
    opacity: 0.6;
  }
}

@keyframes progressSlide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes exploreTitle {
  0%, 100% { 
    filter: drop-shadow(0 0 10px rgba(33, 150, 243, 0.5));
    transform: scale(1);
  }
  50% { 
    filter: drop-shadow(0 0 20px rgba(255, 235, 59, 0.7));
    transform: scale(1.02);
  }
}

@keyframes starTwinkle {
  0%, 100% { 
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% { 
    opacity: 0.7;
    transform: scale(1.2) rotate(180deg);
  }
}

@keyframes pinBounce {
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-10px);
  }
}
`;

// Inject the CSS animations
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = animationStyles;
  document.head.appendChild(styleElement);
}

export default Explore;
