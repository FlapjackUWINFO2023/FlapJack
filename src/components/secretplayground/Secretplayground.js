import React, { useEffect, useRef, useState } from 'react';
import {
	User,
	Net,
	Flapjack,
    Speech,
    DialogueMessageContainer,
    NextButton,
    Whale,
    Circle
} from './styles.tsx';
import { useNavigate } from 'react-router-dom';
import sqaureImg from './square.png'

function Secretplayground() {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(300);
    const [canMove, setCanMove] = useState(true)
    const [moveCount, setMoveCount] = useState(0)

	// Nets
	const [netRemove, setNetRemove] = useState(0);

    //Square
    const [squarePoints, setSquarePoints] = useState({}) 

	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const navigate = useNavigate();

    let keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    }

    document.addEventListener("keyup", (event) => {
        if (event.key === "ArrowLeft") {
            keys.ArrowLeft = false
        }
        if (event.key === "ArrowRight") {
            keys.ArrowRight = false
        }
        if (event.key === "ArrowUp") {
            keys.ArrowUp = false
        }
        if (event.key === "ArrowDown") {
            keys.ArrowDown = false
        }
    })

    document.addEventListener("keydown", (event) => {
        console.log(event)
        if (event.key === "ArrowLeft") {
            keys.ArrowLeft = true
        }
        if (event.key === "ArrowRight") {
            keys.ArrowRight = true
        }
        if (event.key === "ArrowUp") {
            keys.ArrowUp = true
        }
        if (event.key === "ArrowDown") {
            keys.ArrowDown = true
        }

        if (keys.ArrowLeft) {
            setXAxis(xAxis - 50)
        } else if (keys.ArrowRight) {
            setXAxis(xAxis + 50)
        } else if (keys.ArrowUp) {
            setYAxis(yAxis - 50)
        } else if (keys.ArrowDown) {
            setYAxis(yAxis + 50)
        }
    })

    const handleKeyDown = event => {
        // if(event.key === "a") {
        //     // console.log(sqaure.current.x, sqaure.current.y, "square.current")
        //     console.log("X center", grabUserXPosition())
        //     console.log("Y center", grabUserYPosition())
        //     // console.log("sqaure center", squarePoints)
        // }
        // const newPlayerCords = {xPosition: grabUserXPosition(),
        //                         yPosition: grabUserYPosition(),
        //                         width: user.current.width,
        //                         height: user.current.height}
        // if(event.key === 'ArrowRight') {
        //     newPlayerCords.xPosition+=100;
        //     if(!checkObstacle(newPlayerCords)) {
        //         setXAxis(xAxis + 50)
        //     }
        // }
        // if(event.key === 'ArrowLeft') {
        //     newPlayerCords.xPosition-=100;
        //     if(!checkObstacle(newPlayerCords)) {
        //         setXAxis(xAxis - 50)
        //     }
        // }
        // if(event.key === 'ArrowDown') {
        //     newPlayerCords.yPosition+=50;
        //     if(!checkObstacle(newPlayerCords)) {
        //         setYAxis(yAxis + 50)
        //     }
        // }
        // if(event.key === 'ArrowUp') {
        //     newPlayerCords.yPosition-=50;
        //     if(!checkObstacle(newPlayerCords)) {
        //         setYAxis(yAxis - 50)
        //     }
        // }
        // checkWhaleRange();
        // checkObstacle(newPlayerCords);
        // setMoveCount(moveCount + 1)
        // checkWithinRange(newPlayerCords);
	};

    // Create function to grab true XY positions
    function grabUserXPosition() {
        return  user.current.offsetLeft + (user.current.width / 2);
    }

    function grabUserYPosition() {
        return user.current.offsetTop + (user.current.height / 2)
    }

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	// const sqaure = useRef(null);
    // const net = useRef(null)
    // const whale = useRef(null);

	useEffect(() => {
		user.current.focus();
        // net.current.focus();
        // whale.current.focus();

        // sqaure.current.focus();
        // Insert code to the set the usestate of thw square's location
        // const squareX = sqaure.current.offsetLeft + (sqaure.current.width / 2)
        // const squareY = sqaure.current.offsetTop + (sqaure.current.height / 2)
        // setSquarePoints({
        //     x: squareX,
        //     y: squareY,
        //     leftEdge: squareX - (sqaure.current.width / 2),
        //     rightEdge: squareX + (sqaure.current.width / 2),
        //     topEdge: squareY - (sqaure.current.height / 2),
        //     bottomEdge: squareY + (sqaure.current.height / 2)
        // })
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 400) {
			navigate('/level1');
		}
	}

    function checkObstacle(newPlayerCords) {
        return false;
        // Corners
        // const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
        //     const newCorners = {x: newPlayerCords.xPosition + (75)*cords[0], y: newPlayerCords.yPosition- (75)*cords[1]}
        //     console.log(cords, newCorners)
        //     return (squarePoints.leftEdge <= newCorners.x && newCorners.x <= squarePoints.rightEdge &&
        //         newCorners.y <= squarePoints.bottomEdge && squarePoints.topEdge <= newCorners.y)
        // })
        // console.log(playerCorners)
        // return playerCorners.length >= 1;
    }

	// function checkWithinRange(newPlayerCords) {
    //     if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 500) {
    //         document.getElementById('net').classList.add('in-range');
    //     } else {
    //         document.getElementById('net').classList.remove('in-range');
    //     }
	// }

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
            // End tutorial
		}
	}

    // function checkWhaleRange() {
    //     console.log(Math.sqrt((grabUserXPosition()- whale.current.offsetLeft)**2 + (grabUserYPosition() - (whale.current.offsetTop + (whale.current.height / 2)))**2 ));
    //     if(Math.sqrt((grabUserXPosition() - whale.current.offsetLeft)**2 + (grabUserYPosition() - (whale.current.offsetTop + (whale.current.height / 2)))**2) <= 100) {
    //         document.getElementById('playable').classList.add('in-range');
    //     } else {
    //         document.getElementById('playable').classList.remove('in-range');
    //     }
    // }

    // const onClickWhate = () => {
    //     if(Math.sqrt((user.current.x - whale.current.offsetLeft)**2 + (user.current.y - whale.current.offsetTop)**2 ) <= 100) {
    //         // Switch to scene to go into whale
    //         console.log("Next Phrase")
    //     } 
    // }


    return (
        <div className='play-area' onClick={() => user.current.focus()}>
            {/* User */}
            {/* <Whale
                src={'/sprites/sprite-wendy-whale.png'}
                id={"Whale"}
                ref={whale}
                onClick={onClickWhate}
            /> */}
            <User
				style={userPlacement}
				ref={user}
				tabIndex={0}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-user-placeholder.png`}
				id='playable'
				className='img-size'
				alt="User's character"
			/>
			{/* Net 1 */}
			{/* {<Net
				src={`/sprites/sprite-fishing-net.png`}
				ref={net}
				onClick={removeNet}
				className='img-size'
				alt="Net"
				id='net'
			/>} */}

            {/* <Circle 
                src={sqaureImg}
                id='square'
                ref={sqaure}/> */}
        </div>
    );
}


export default Secretplayground;


