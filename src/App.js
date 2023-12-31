// This App component is the root of the React application and displays a piano keyboard.
// There is an opening title that fades out after 5 seconds.

import React, { useEffect } from 'react';
import Piano from './components/Piano';
import './App.css';

const App = () => {
  useEffect(() => {
    const fadeTime = setTimeout(() => {
      const element = document.getElementById("opening-title");
      if (element) {
        element.classList.add("fade-out");
      }
    }, 5000);

    return () => {
      clearTimeout(fadeTime);
    };
  }, []);

  return (
    <div className="app">

      <header className="app-header">
        <h1 id="opening-title">7 Octave Digital Piano and Recorder</h1>
      </header>

      <Piano />

    </div>
  );
}

export default App;
