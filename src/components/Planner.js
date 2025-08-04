import React, { useState } from "react";
import Navbar from './Navbar'; // Adjust the path if necessary

function Planner() {
  const [trip, setTrip] = useState([]);

  const handlePlanTrip = () => {
    setTrip([
      { 
        location: "Chelsea Beach", 
        description: "A family-friendly beach known for its clear waters and swimming opportunities.", 
        bestTime: "9 AM - 5 PM"
      },
      { 
        location: "Kingston Heath Reserve", 
        description: "A large park featuring sports facilities, picnic areas, and scenic walking tracks.", 
        bestTime: "8 AM - 6 PM"
      },
      { 
        location: "Dingley Village Farmers Market", 
        description: "A vibrant local market offering fresh produce, handmade crafts, and artisan goods.", 
        bestTime: "Saturday Mornings"
      },
      { 
        location: "Mordialloc Pier", 
        description: "A picturesque spot perfect for fishing and enjoying stunning views over the bay.", 
        bestTime: "Sunset Hours"
      },
      { 
        location: "Woodlands Golf Club", 
        description: "Renowned as one of Melbourne's finest golf courses with a beautiful layout.", 
        bestTime: "Early Morning Tee Times"
      },
      { 
        location: "Braeside Park", 
        description: "A large natural park with walking trails, picnic areas, and wildlife viewing.", 
        bestTime: "9 AM - 5 PM"
      },
      { 
        location: "Carrum Beach", 
        description: "A popular beach destination for swimming, sunbathing, and beachside dining.", 
        bestTime: "10 AM - 4 PM"
      },
      { 
        location: "Mordialloc Beach", 
        description: "A lively beach area great for families, featuring a foreshore park and cafes.", 
        bestTime: "11 AM - 5 PM"
      },
      { 
        location: "Highett Reserve", 
        description: "A community park offering sports fields, playgrounds, and picnic facilities.", 
        bestTime: "10 AM - 6 PM"
      },
      { 
        location: "Edithvale Wetlands", 
        description: "A unique natural habitat with walking trails and birdwatching opportunities.", 
        bestTime: "Early Morning for Birdwatching"
      },
      { 
        location: "Kingston City Hall", 
        description: "A historic building hosting events and performances, with beautiful architecture.", 
        bestTime: "Check Event Schedule"
      },
      { 
        location: "The Australian National Aviation Museum", 
        description: "An engaging museum featuring a collection of vintage aircraft and aviation exhibits.", 
        bestTime: "10 AM - 4 PM"
      },
      { 
        location: "Dingley Village", 
        description: "A charming suburb with a relaxed atmosphere, featuring local shops and eateries.", 
        bestTime: "Anytime during the day"
      },
      { 
        location: "Paterson River", 
        description: "A scenic river ideal for kayaking, fishing, and enjoying nature walks.", 
        bestTime: "Morning or Late Afternoon"
      },
    ]);
  };

  const handleRemoveLocation = (index) => {
    setTrip((prevTrip) => prevTrip.filter((_, i) => i !== index));
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={contentContainerStyle}>
        <div style={contentStyle}>
          <h2 style={titleStyle}>Kingston, Melbourne Trip Planner 📓</h2>
          <button onClick={handlePlanTrip} style={buttonStyle}>Plan My Trip 📚</button>
          
          {trip.length > 0 && (
            <div style={statsStyle}>
              <div style={statItemStyle}>
                <span style={statNumberStyle}>{trip.length}</span>
                <span style={statLabelStyle}>Locations</span>
              </div>
            </div>
          )}
          
          <ul style={listStyle}>
            {trip.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <button onClick={() => handleRemoveLocation(index)} style={removeButtonStyle}>
                  <span role="img" aria-label="remove">❌</span> 
                </button>
                <div style={locationNameStyle}>{item.location}</div>
                <div style={locationDescriptionStyle}>{item.description}</div>
                <div style={bestTimeStyle}>⏰ Best Time to Visit: {item.bestTime}</div>
              </li>
            ))}
          </ul>
          
          {trip.length === 0 && (
            <div style={emptyStateStyle}>
              <div style={emptyIconStyle}>📋</div>
              Your trip is currently empty. Click "Plan My Trip" to get started!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 50%, #1B5E20 100%)',
  position: 'relative',
  overflowX: 'hidden',
};

const contentContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '20px',
  paddingTop: '100px', // Space for navbar
  position: 'relative',
  zIndex: 2,
};

const contentStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(25px)',
  borderRadius: '25px',
  padding: '40px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  width: '100%',
  maxWidth: '900px',
  position: 'relative',
  overflow: 'hidden',
};

const titleStyle = {
  fontSize: '3.2rem',
  fontWeight: '800',
  textAlign: 'center',
  background: 'linear-gradient(135deg, #ffffff, #f0f0f0, #e0e0e0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '30px',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  position: 'relative',
};

const buttonStyle = {
  background: 'linear-gradient(135deg, #8BC34A 0%, #4CAF50 50%, #2E7D32 100%)',
  color: 'white',
  border: 'none',
  padding: '18px 45px',
  fontSize: '1.3rem',
  fontWeight: '700',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  position: 'relative',
  overflow: 'hidden',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  margin: '20px auto',
  boxShadow: '0 10px 30px rgba(76, 175, 80, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  display: 'block',
};

const statsStyle = {
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px 0',
  backdropFilter: 'blur(10px)',
};

const statItemStyle = {
  textAlign: 'center',
  color: 'white',
};

const statNumberStyle = {
  fontSize: '2rem',
  fontWeight: '800',
  background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'block',
};

const statLabelStyle = {
  fontSize: '0.9rem',
  opacity: 0.8,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: 'white',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '30px',
  maxHeight: '600px',
  overflowY: 'auto',
  paddingRight: '10px',
};

const listItemStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: '25px',
  marginBottom: '20px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  position: 'relative',
  overflow: 'hidden',
};

const locationNameStyle = {
  fontSize: '1.4rem',
  fontWeight: '700',
  background: 'linear-gradient(135deg, #ffffff, #f5f5f5)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '10px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
};

const locationDescriptionStyle = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '10px',
};

const bestTimeStyle = {
  background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontStyle: 'italic',
  fontWeight: '500',
  fontSize: '0.95rem',
  marginBottom: '15px',
};

const removeButtonStyle = {
  background: 'linear-gradient(135deg, #f44336, #d32f2f)',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontSize: '0.9rem',
  fontWeight: '600',
  position: 'absolute',
  top: '15px',
  right: '15px',
  boxShadow: '0 4px 12px rgba(244, 67, 54, 0.3)',
};

const emptyStateStyle = {
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '1.2rem',
  padding: '40px',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '20px',
  border: '2px dashed rgba(255, 255, 255, 0.2)',
  marginTop: '30px',
};

const emptyIconStyle = {
  fontSize: '3rem',
  marginBottom: '15px',
};

export default Planner;


