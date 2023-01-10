import React from 'react';
import { Routes, Route } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import Hangman from "./Pages/Hangman";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </div>
  );
}

export default App;
