import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  const {ref, playState, getAnimation} = useWebAnimations({
    keyframes:[
      {transform: 'translate(0px)'},
      {transform: 'translate(500px)'}
    ],
    animationOptions: {
      duration: 3000,
      iterations: 5,
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  return (
    <div id="container">
      <div>Animation state <strong>{playState}</strong></div>
      <div ref={ref}>
        <em>I Love Pakistan</em>
      </div>
      <button className="play" onClick={()=>{
        getAnimation().play();
      }}>Play</button>

      <button className="pause" onClick={()=>{
        getAnimation().pause();
      }}>Pause</button>
    </div>
    
  );
}

export default App;
