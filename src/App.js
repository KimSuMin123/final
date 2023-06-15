import React, {useState} from 'react';
import './App.css';

function App() {
  const [colorCode, setColorCode] = useState("Purple");

  const changeText = (e) => {
    setColorCode(e.target.value);
  }

  const applyColor = () => {
    document.documentElement.style.setProperty(
      '--background-color', 
      colorCode
    );
  }

  return (
    <div style={{margin: "50px 50px"}}>
      <label>
        BackgroundColor : {colorCode}    
        <input value={colorCode} onChange={changeText}/>   
      </label>
      <button onClick={applyColor}>적용</button>
    </div>
  );
}

export default App;