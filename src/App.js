
import { useState } from 'react';
import './App.css';
import {Text} from "./text";

function App() {
  const [showText, setShowText]=useState(false);

  return (
    <div className="App">
    <button
        onClick={() => {
          setShowText(!showText); // set the showText to be true
        }}
      >
        Show Text
      </button>
      {showText && <Text />} 
 

   
    </div>
  );
}

export default App;
