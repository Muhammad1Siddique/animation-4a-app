import React, { useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './style.css';

function QueenAlice() {
  const sceneryFrames =   [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }   
    ];

  const sceneryTimingBackground = {
    duration: 20000,
    iterations: Infinity,
    playbackRate: 1
  };

  const sceneryTimingForeground = {
    duration: 8000,
    iterations: Infinity,
    playbackRate: 1
  };

  

  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground
  })

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  })

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  })
  const spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }   
  ];


  const redQueen_alice = useWebAnimations({
    keyframes: spriteFrames,
    animationOptions: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations:Infinity
    }
  })

  var speed = 1;
  useEffect(()=>{
    setInterval(()=>{
      if(speed > 0.7){
        speed *= 0.9;
        redQueen_alice.getAnimation().playbackRate = speed;
        foreground1Movement.getAnimation().playbackRate = speed;
        foreground2Movement.getAnimation().playbackRate = speed;
        background1Movement.getAnimation().playbackRate = speed;
        background2Movement.getAnimation().playbackRate = speed;
      }
    }, 2000)
    document.addEventListener("click", ()=>{
      speed *= 1.1;
      redQueen_alice.getAnimation().playbackRate = speed;
      foreground1Movement.getAnimation().playbackRate = speed;
      foreground2Movement.getAnimation().playbackRate = speed;
      background1Movement.getAnimation().playbackRate = speed;
      background2Movement.getAnimation().playbackRate = speed;
    })
  })

  
  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice" >
          <img ref={redQueen_alice.ref} width="100%" id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
      </div>
      <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>    
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
      </div>
      <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
      </div>
      <div className="scenery" id="background2" ref={background2Movement.ref}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
      </div>
    </div>
  );
}
  
  export default QueenAlice;
  