import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  const {ref} = useWebAnimations({
    keyframes:[
      {transform: 'translate(0px)'},
      {transform: 'translate(500px)'}
    ],
    animationOptions: {
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  return (
    <div ref={ref} className="appStyle">
     hello there
    </div>
  );
}

export default App;
