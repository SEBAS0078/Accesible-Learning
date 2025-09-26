import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Links.jsx'

import Links from "./Links";

function App() {
  return (
    <div>
    <div className = "intro">
      <h1>Accessible Learning</h1>
      <p>
        Our mission is to make learning accessible for everyone by compiling free
        and public resources across a wide variety of skills and topics.
      </p>

      {/* Render your Links component */}
      
    </div>
    <Links />
    </div>
  );
}


export default App;

