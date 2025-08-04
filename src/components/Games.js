// Games.js
import React, { useState } from "react";
import Navbar from './Navbar'; // Adjust the path if necessary

function Games() {
  const [score, setScore] = useState(0);

  // Array of trivia questions and their answers
  const triviaQuestions = [
    {
      question: "What is the local government area that includes Kingston in Melbourne?",
      correctAnswer: ["kingston", "kingston city", "Kingston", "Kingston city", "Kingston City"],
      correctMessage: "Correct! Kingston is a city in Melbourne.",
      wrongMessage: "Wrong answer! The correct answer is Kingston."
    },
    {
      question: "What famous beach is located in Kingston, Melbourne?",
      correctAnswer: ["mordialloc beach", "mordialloc", "Mordialloc beach", "Mordialloc"],
      correctMessage: "Correct! Mordialloc Beach is in Kingston.",
      wrongMessage: "Wrong answer! The correct answer is Mordialloc Beach."
    },
    {
      question: "What is the name of the park that features wetlands and walking trails in Kingston?",
      correctAnswer: ["braeside park", "Braeside park"],
      correctMessage: "Correct! Braeside Park has beautiful wetlands and trails.",
      wrongMessage: "Wrong answer! The correct answer is Braeside Park."
    },
    {
      question: "Which famous golf club is located in Kingston, Melbourne?",
      correctAnswer: ["woodlands golf club", "woodlands", "Woodlands golf club", "Woodlands", "Woodlands Golf Club"],
      correctMessage: "Correct! Woodlands Golf Club is a popular golf destination.",
      wrongMessage: "Wrong answer! The correct answer is Woodlands Golf Club."
    },
    {
      question: "What is the name of the railway station that serves the suburb of Cheltenham in Kingston?",
      correctAnswer: ["cheltenham station", "cheltenham", "Cheltenham Station", "Cheltenham"],
      correctMessage: "Correct! Cheltenham Station serves the suburb of Cheltenham.",
      wrongMessage: "Wrong answer! The correct answer is Cheltenham Station."
    },
    {
      question: "Kingston is home to which heritage-listed shopping center?",
      correctAnswer: ["dingley village shopping centre", "dingley village", "Dingley Village Shopping Centre", "Dingley Village"],
      correctMessage: "Correct! Dingley Village Shopping Centre is heritage-listed.",
      wrongMessage: "Wrong answer! The correct answer is Dingley Village Shopping Centre."
    },
    {
      question: "What natural landmark separates Kingston from the Mornington Peninsula?",
      correctAnswer: ["patterson river", "Patterson river", "Patterson River"],
      correctMessage: "Correct! Patterson River is the natural landmark.",
      wrongMessage: "Wrong answer! The correct answer is Patterson River."
    },
    {
      question: "What large indoor sports center is located in Kingston, Melbourne?",
      correctAnswer: ["springers leisure centre", "springers", "Springers Leisure Centre", "Springers"],
      correctMessage: "Correct! Springers Leisure Centre is a popular sports center.",
      wrongMessage: "Wrong answer! The correct answer is Springers Leisure Centre."
    }
  ];

  const handleTrivia = () => {
    // Select a random question from the array
    const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    const answer = prompt(randomQuestion.question);

    if (answer && randomQuestion.correctAnswer.includes(answer.toLowerCase())) {
      alert(randomQuestion.correctMessage);
      setScore(score + 1);
    } else {
      alert(randomQuestion.wrongMessage);
    }
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
  };

  const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    padding: '20px',
  };

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '30px',
    padding: '50px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    maxWidth: '600px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '30px',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #FFEB3B 0%, #FFC107 50%, #FF9800 100%)',
    color: '#1a1a1a',
    border: 'none',
    padding: '18px 40px',
    fontSize: '1.2rem',
    fontWeight: '700',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '20px 0',
    boxShadow: '0 8px 25px rgba(255, 235, 59, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  };

  const scoreStyle = {
    background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '25px',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginTop: '25px',
    boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
  };

  const textStyle = {
    color: 'white',
    fontSize: '1.4rem',
    marginTop: '20px',
    fontWeight: '500',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  };

  const backgroundOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 20% 80%, rgba(255, 235, 59, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)
    `,
    zIndex: 1,
    pointerEvents: 'none',
  };

  // Add CSS animations using a style tag
  const cssAnimations = `
    @keyframes backgroundPulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.7; }
    }
    
    .games-button:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 15px 35px rgba(255, 235, 59, 0.6), 0 8px 20px rgba(255, 193, 7, 0.4);
      background: linear-gradient(135deg, #FFF176 0%, #FFD54F 50%, #FFAB40 100%);
    }
    
    .games-button:active {
      transform: translateY(-2px) scale(1.02);
      transition: all 0.1s ease;
    }
    
    @media (max-width: 768px) {
      .games-content {
        padding: 30px 20px !important;
        margin: 20px !important;
      }
      
      .games-title {
        font-size: 2.2rem !important;
      }
      
      .games-button {
        padding: 15px 30px !important;
        font-size: 1.1rem !important;
      }
      
      .games-text {
        font-size: 1.2rem !important;
      }
      
      .games-score {
        font-size: 1.1rem !important;
        padding: 12px 25px !important;
      }
    }
    
    @media (max-width: 480px) {
      .games-content {
        padding: 25px 15px !important;
      }
      
      .games-title {
        font-size: 1.8rem !important;
      }
      
      .games-button {
        padding: 12px 25px !important;
        font-size: 1rem !important;
      }
      
      .games-text {
        font-size: 1.1rem !important;
      }
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <div style={containerStyle}>
        <div style={backgroundOverlayStyle}></div>
        <Navbar />
        <div style={contentContainerStyle}>
          <div style={contentStyle} className="games-content">
            <h2 style={titleStyle} className="games-title">Games 🎲</h2>
            <button 
              onClick={handleTrivia} 
              style={buttonStyle}
              className="games-button"
            >
              Play Kingston Trivia ▶️
            </button>
            <div style={scoreStyle} className="games-score">
              🏆 Your score: {score}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;

