import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import {
  User,
  ExclamationMarks,
  Background,
  DialogueImg,
  DialogueMessageContainer,
} from "./styles.tsx";

function FlapGuide(props) {
  const { isSeaGuide, setIsSeaGuide } = props;

  // Player Movement
  const [xAxis, setXAxis] = useState(60);
  const [yAxis, setYAxis] = useState(100);

  // Change Player's Position
  const userPlacement = { top: yAxis + -500 + 'px', left: xAxis + 960 + 'px' };
  const navigate = useNavigate();
  const user = useRef(null);
  const fish = useRef(null);

  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') {
      setXAxis(xAxis + 50)
    }
    if (event.key === 'ArrowLeft') {
      setXAxis(xAxis - 50)
    }
    if (event.key === 'ArrowDown') {
      setYAxis(yAxis + 50)
    }
    if (event.key === 'ArrowUp') {
      setYAxis(yAxis - 50)
    }
    checkWithinRange();
  };

  const handleWithinRange = (event) => {
  console.log(Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2))
    if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 200) {
      console.log("testing")
      navigate('/level1');
    }
  }

  function checkWithinRange() {
    if (Math.sqrt((user.current.x - fish.current.x) ** 2 + (user.current.y - fish.current.y) ** 2) <= 200) {
      document.getElementById('seagull-guide').classList.add('in-range');
    } else {
      document.getElementById('seagull-guide').classList.remove('in-range');
    }
  }

  useEffect(() => {
    user.current.focus();
    fish.current.focus();
    setIsSeaGuide(true);
  }, [isSeaGuide]);

  return (
    <div className='seagull-area play-area' onClick={() => user.current.focus()}>
      <Background className='play-area'>
        <DialogueImg src='./sprites/misc-textbubble-left.png' alt="Text bubble background" className='textBox' id="dialogueBox" />
        <DialogueMessageContainer className="message-container">
          <p>Let's approach this seagull with the exclamation marks! <ExclamationMarks src='./imgs/excel.png' alt='Exclamation marks' /> Walk to it and click on the seagull to talk to them.</p>
        </DialogueMessageContainer>
        <img className="excel sprite-container" src='./imgs/excel.png' />
        <img className="fish sprite-container" id="seagull-guide" ref={fish} src='./sprites/sprite-shawn-seagull.png' onClick={handleWithinRange} />
        <img className="flapjack-guide sprite-container" src='./sprites/sprite-pancake-bowl.png' />
      </Background>
      {/* User */}
      <User
        style={userPlacement}
        ref={user}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        src={`/sprites/sprite-user.png`}
        id='guide-playable'
        className="img-size"
        alt="User's placeholder"
      />
    </div>
  );
};

export default FlapGuide;

