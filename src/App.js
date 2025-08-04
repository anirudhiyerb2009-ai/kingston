import React from 'react';
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Explore from "./components/Explore";
import Planner from "./components/Planner";
import Games from "./components/Games";
import PrivacySettings from "./components/PrivacySettings";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Set Welcome Page as the default route */}
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/games" element={<Games />} />
        <Route path="/privacy" element={<PrivacySettings />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;