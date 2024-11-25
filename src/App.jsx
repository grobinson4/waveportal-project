import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        Join the Wave
        </div>

        <div className="bio">
        Welcome to the Wave Portal! Upload your wav files and listen today!
        </div>

        <button className="waveButton" onClick={wave}>
          Upload your audio
        </button>
      </div>
    </div>
  );
}
