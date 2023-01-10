import React from "react";
import Canvas from "./comonents/CanvasComponent";
import { Routes, Route } from "react-router-dom";

import StartPage from "./Pages/StartPage";
import Hangman from "./Pages/Hangman";

function App() {
  const gras = (context) => {
    context.beginPath();
    context.moveTo(20, 230);
    context.strokeStyle = "#FFFFFF";
    context.lineTo(100, 230);
    context.stroke();
  };

  const head = (context) => {
    context.beginPath();
    context.arc(140, 70, 20, 0 * Math.PI, 2 * Math.PI);
    context.stroke();
  };

  const rod = (context) => {
    context.beginPath();
    context.moveTo(60, 20);
    context.lineTo(140, 20);
    context.lineTo(140, 50);
    context.moveTo(60, 20);
    context.lineTo(60, 230);
    context.stroke();
  };

  const body = (context) => {
    context.beginPath();
    context.moveTo(140, 90);
    context.lineTo(140, 150);
    context.stroke();
  };

  const arms = (context) => {
    context.beginPath();
    context.moveTo(140, 120);
    context.lineTo(120, 100);
    context.moveTo(140, 120);
    context.lineTo(160, 100);
    context.stroke();
  };

  const legs = (context) => {
    context.beginPath();
    context.moveTo(140, 150);
    context.lineTo(120, 180);
    context.moveTo(140, 150);
    context.lineTo(160, 180);
    context.stroke();
  };

  const draw = (context) => {
    gras(context);
    head(context);
    rod(context);
    arms(context);
    body(context);
    legs(context);
  };

  return (
    <div className="App">
      <Canvas draw={draw} height={550} width={550}></Canvas>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </div>
  );
}

export default App;
