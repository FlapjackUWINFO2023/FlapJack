import React, { useEffect, useRef, useState } from 'react';
import {
    User,
    Net,
    Flapjack,
    FlapjackBowl,
    Circle,
    ArrowKeys,
    DialogueImg,
    DialogueMessageContainer
} from './styles.tsx';
import { NextButton } from '../VisualNovel/styles.tsx';
import { useNavigate } from 'react-router-dom';
import circleImg from './tutorial-circle.png'
import arrowKeys from './tutorial-arrow-keys.png'
import textBubble from './misc-textbubble-left.png';

function Tutorial(props) {
    setTimeout(() => document.querySelector('body').classList.remove('fade'), 500);

    const { currentLevel } = props;
    // Player Movement
    const [xAxis, setXAxis] = useState(200);
    const [yAxis, setYAxis] = useState(300);
    const [canMove, setCanMove] = useState(false);
    const [moveCount, setMoveCount] = useState(0);
    // Nets
    const [netRemove, setNetRemove] = useState(0);
    // Change Player's Position
    const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
    const navigate = useNavigate();
    // Tutorial
    const [textPage, setTextPage] = useState(0);
    const [displayButton, setDisplayButton] = useState(true);
    const tutorialText = [
        "Welcome to my beloved home! Click the Next button to continue.", // Player can't move, click next button to countine
        "Let's swim around a little! You can swim around using the arrow keys.", // Player can move, hide next button
        "Great! Try moving into this circle.", // After moving around show this message, Player can move, 
        "Oh? Looks like there is a piece of trash that came by!", // Stop player movement, show next button
        "Let's swim to it and pick it up! You can pick it up by clicking on it.", // Player can move
        "Great job! Your help in saving the ocean is greatly appreciated by all of us marine animals.",
        "I think you're ready to go. Let's go meet other marine animals in the ocean!" // Stop player movement, End of tutorial
    ];

    let background = '';
    if (currentLevel === 1) {
        background = "url(./sprites/bg-beach-level.png)";
    } else if (currentLevel === 2) {
        background = "url(./sprites/bg-mid-sea.png)";
    } else if (currentLevel === 3) {
        background = "url(./sprites/bg-deep-sea-level.png)";
    }

    const handleKeyDown = event => {
        if (canMove) {
            const newPlayerCords = {
                offsetLeft: user.current.offsetLeft,
                offsetRight: window.innerWidth - user.current.offsetLeft - user.current.offsetWidth,
                offsetTop: user.current.offsetTop,
                offsetBottom: (window.innerHeight - user.current.offsetTop - user.current.offsetHeight)
            }
            if (event.key === 'ArrowRight') {
                newPlayerCords.offsetRight -= 50;
                if (!checkOutRange(newPlayerCords)) { 
                    setXAxis(xAxis + 50)
                }
            }
            if (event.key === 'ArrowLeft') {
                newPlayerCords.offsetLeft -= 50;
                if(!checkOutRange(newPlayerCords)) {
                    setXAxis(xAxis - 50)
                }
            }
            if (event.key === 'ArrowDown') {
                newPlayerCords.offsetBottom -= 50;
                if(!checkOutRange(newPlayerCords)) { 
                    setYAxis(yAxis + 50)
                }
            }
            if (event.key === 'ArrowUp') {
                newPlayerCords.offsetTop -= 50;
                if(!checkOutRange(newPlayerCords)) { 
                    setYAxis(yAxis - 50)
                }
            }
            checkWithinRange();
            setMoveCount(moveCount + 1) 
        }
        if (moveCount === 10) {
            // show circle
            setTextPage(textPage + 1);
        }
    };

    function checkOutRange(newPlayerCords) {
		return (newPlayerCords.offsetLeft < -100) || (newPlayerCords.offsetRight < -100) || (newPlayerCords.offsetTop < -100) || (newPlayerCords.offsetBottom < -100); 
	}

    function randomPx() {
        let px = Math.floor((Math.random() * 250) + 50);
        return px;
    }

    const user = useRef(null);
    const circle = useRef(null);
    const net = useRef(null)

    useEffect(() => {
        user.current.focus();
    }, []);

    const handleWithinRange = (event) => {
        if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 400) {
            navigate('/level1');
        }
    }

    function checkWithinRange() {
        // Checking range for circle
        if (textPage === 2) {
            circle.current.focus();
            if (Math.sqrt((user.current.x - circle.current.x) ** 2 + (user.current.y - circle.current.y) ** 2) <= 350) {
                setTextPage(textPage + 1);
                setDisplayButton(true);
                setCanMove(false);
            }
        }

        // Checking range for nets
        if (textPage === 4) {
            net.current.focus();
            if (Math.sqrt((user.current.x - net.current.x) ** 2 + (user.current.y - net.current.y) ** 2) <= 500) {
                document.getElementById('net').classList.add('in-range');
            } else {
                document.getElementById('net').classList.remove('in-range');
            }
        }
    }

    const removeNet = (event) => {
        if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
            event.target.classList.add('hidden');
            setNetRemove(netRemove + 1);
            setTextPage(textPage + 1);
            // End tutorial
            setCanMove(false);
            setDisplayButton(true);
        }
    }

    const handleNextText = () => {
        setTextPage(textPage + 1);
        if (textPage === 0 || textPage === 3) {
            setCanMove(true);
            setDisplayButton(false);
        }
        if (textPage === tutorialText.length - 1) {
            console.log("redirect to next page");
            if (currentLevel === 1) {
                navigate('/seaguide');
            } else if (currentLevel === 2) {
                navigate('/flapguide');
            }
            setDisplayButton(false);
        }
    }

    return (
        <div id='tutorial-background' className='play-area' onClick={() => user.current.focus()} style={{ backgroundImage: background }}>
            {textPage === 2 && <Circle
                src={circleImg}
                ref={circle} />}
            <div>
                <DialogueImg src={textBubble} alt="Text bubble background" className='textBox' id="dialogueBox" />
                <DialogueMessageContainer className="message-container">
                    {textPage === 1 && <ArrowKeys src={arrowKeys} />}
                    <p>{tutorialText[textPage]}</p>
                </DialogueMessageContainer>
                {displayButton && <NextButton className='nextBtn' onClick={handleNextText}>Next</NextButton>}
            </div>
            {currentLevel === 1 &&
                <FlapjackBowl
                    tabIndex={-1}
                    onKeyDown={handleKeyDown}
                    src={`/sprites/sprite-pancake-bowl.png`}
                    className='img-size'
                    alt="Pancake the flapjack"
                />
            }
            {currentLevel === 2 &&
                <Flapjack
                    tabIndex={-1}
                    onKeyDown={handleKeyDown}
                    src={`/sprites/sprite-pancake-flapjack-octopus.png`}
                    className='img-size'
                    alt="Pancake the flapjack"
                />
            }
            {/* User */}
            <User
                style={userPlacement}
                ref={user}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                src={`/sprites/sprite-user-placeholder.png`}
                id='tutorial-playable'
                className='img-size'
                alt="User's character"
            />
            {/* Net 1 */}
            {textPage >= 3 && <Net
                src={`/sprites/sprite-fishing-net.png`}
                ref={net}
                onClick={removeNet}
                className='img-size'
                alt="Net"
                id='net'
            />}

        </div>
    );
}


export default Tutorial;


