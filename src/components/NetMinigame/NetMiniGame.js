import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
	Obstacle,
	Whale,
	NextButton,
	PointsContainer,
	StartButton
} from './styles.tsx';
import postGameDialogue from '../Stories/postGameDialogue.json';

function NetMiniGame(props) {
	const { isGameComplete, setIsGameComplete, setIsQuiz } = props;

	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	// Nets
	const [netPlacement, setNetPlacement] = useState({});
	const [netPlacement2, setNetPlacement2] = useState({});
	const [netPlacement3, setNetPlacement3] = useState({});
	const [netRemove, setNetRemove] = useState(0);
	//Obstacle
	const [obstacleList, setObstacleList] = useState([])
	const [obstaclePosition, setObstaclePosition] = useState([])
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	// Level
	const [level, setLevel] = useState(1)
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	// Load Modal
	if (netRemove === 3 && page === 1) {
		document.getElementById("load-modal-1").click();
	}

	// Player Controls
	const handleKeyDown = event => {
		const newPlayerCords = {
			xPosition: grabUserXPosition(),
			yPosition: grabUserYPosition(),
			width: user.current.width,
			height: user.current.height,
			offsetLeft: user.current.offsetLeft,
			offsetRight: window.innerWidth - user.current.offsetLeft - user.current.offsetWidth,
			offsetTop: user.current.offsetTop,
			offsetBottom: (window.innerHeight - user.current.offsetTop - user.current.offsetHeight)
		}
		if (event.key === 'ArrowRight') {
			newPlayerCords.offsetRight -= 50;
			if (!checkOutRange(newPlayerCords)) {
				newPlayerCords.xPosition += 100;			
				if (!checkObstacle(newPlayerCords)) {
					setXAxis(xAxis + 50)
					checkWithinRange(newPlayerCords);
				}
			}
		}
		if (event.key === 'ArrowLeft') {
			newPlayerCords.offsetLeft -= 50;
			if(!checkOutRange(newPlayerCords)) {
				newPlayerCords.xPosition -= 100;
				if (!checkObstacle(newPlayerCords)) {
					setXAxis(xAxis - 50)
					checkWithinRange(newPlayerCords);
				}
			}
		}
		if (event.key === 'ArrowDown') {
			newPlayerCords.offsetBottom -= 50;
			if(!checkOutRange(newPlayerCords)) {
				newPlayerCords.yPosition += 50;
				if (!checkObstacle(newPlayerCords)) {
					setYAxis(yAxis + 50)
					checkWithinRange(newPlayerCords);
				}
			}			
		}
		if (event.key === 'ArrowUp') {
			newPlayerCords.offsetTop -= 50;
			if(!checkOutRange(newPlayerCords)) {
				newPlayerCords.yPosition -= 50;
				if (!checkObstacle(newPlayerCords)) {
					setYAxis(yAxis - 50)
					checkWithinRange(newPlayerCords);
				}
			}
		}
	};

	// Create function to grab true XY positions
	function grabUserXPosition() {
		return user.current.offsetLeft + (user.current.width / 2);
	}

	function grabUserYPosition() {
		return user.current.offsetTop + (user.current.height / 2)
	}

	function randomPx() {
		let px = Math.floor((Math.random() * 300) + 100);
		return px;
	}

	const user = useRef(null);
	// Hard Code
	const net = useRef(null);
	const net2 = useRef(null);
	const net3 = useRef(null);
	// Obstacle List
	const square = useRef(null);
	const square1 = useRef(null);
	const square2 = useRef(null);
	const square3 = useRef(null);
	const square4 = useRef(null);
	const square5 = useRef(null);

	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		setObstacleList([square, square1]);

		const newPositions = [square, square1].map(() => {
			return {
				x: randomPx(), 
				y: randomPx()
			}
		
		})
		setObstaclePosition(newPositions)
		changeNetPositions()
		document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-beach-level.png)`;
		document.getElementById(`load-modal-999`).click();
	}, [setObstacleList, setObstaclePosition]);

	function checkWithinRange(newPlayerCords) {
		[net, net2, net3].forEach((netObjects) => {
			const netPositions = grabObstaclePoistion(netObjects);
			if (Math.sqrt((newPlayerCords.xPosition - netPositions.x) ** 2 + (newPlayerCords.yPosition - netPositions.y) ** 2) <= 250) {
				netObjects.current.classList.add('in-range');
			} else {
				netObjects.current.classList.remove('in-range');
			}
		})
	}

	function checkObstacle(newPlayerCords) {
		if (obstacleList.length === 0) {
			return false
		}
		// Corners
		const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
			const matchPoints = obstacleList.filter((object) => {
				const obstacle = grabObstaclePoistion(object);
				const newCorners = { x: newPlayerCords.xPosition + (20 * cords[0]), y: newPlayerCords.yPosition - (40 * cords[1]) }
				// console.log(newCorners);
				return (
					(obstacle.leftEdge <= newCorners.x && 
					newCorners.x <= obstacle.rightEdge) &&
					(newCorners.y <= obstacle.bottomEdge) && 
					(obstacle.topEdge <= newCorners.y)
				)
			})
			return matchPoints.length >= 1;
		})
		return playerCorners.length >= 1;
	}

	function checkOutRange(newPlayerCords) {
		return (newPlayerCords.offsetLeft < -100) || (newPlayerCords.offsetRight < -100) || (newPlayerCords.offsetTop < -100) || (newPlayerCords.offsetBottom < -100); 
	}

	function grabObstaclePoistion(refObject) {
		const objectX = refObject.current.offsetLeft + (refObject.current.width / 2)
		const objectY = refObject.current.offsetTop + (refObject.current.height / 2)
		return ({
			x: objectX,
			y: objectY,
			leftEdge: objectX - (refObject.current.width / 2),
			rightEdge: objectX + (refObject.current.width / 2),
			topEdge: objectY - (refObject.current.height / 2),
			bottomEdge: objectY + (refObject.current.height / 2)
		})
	}

	const removeNet = (event) => {
		const netX = event.target.offsetLeft + (event.target.width / 2)
		const netY = event.target.offsetTop + (event.target.height / 2)
		if (Math.sqrt((grabUserXPosition() - netX) ** 2 + (grabUserYPosition() - netY) ** 2) <= 300) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	function changeNetPositions() {
		setNetPlacement({ top: randomPx() + 'px', left: (randomPx() * (Math.floor(Math.random() * 2) + 1)) + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: (randomPx() * (Math.floor(Math.random() * 2) + 1)) + 'px' })
		setNetPlacement3({ top: randomPx() + 'px', left: (randomPx() * (Math.floor(Math.random() * 2) + 1)) + 'px' })
	}

	const loadNextModal = () => {
		if (level === 3) {
			let newPage = page + 1;
			setPage(newPage);
			document.getElementById(`load-modal-` + (page + 1)).click();
		} else {
			loadNextLevel();
		}
	}

	const loadNextLevel = () => {
		// Load Beach Level
		if (level === 1) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-dark-blue.png)`;
			setObstacleList([...obstacleList, square2, square3]);
			const newPositions = [...obstacleList, square2, square3].map(() => {
				return {
					x: randomPx(), 
					y: randomPx()
				}
			})
			setObstaclePosition(newPositions)

		} else if (level === 2) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-deep-sea-level.png)`;
			setObstacleList([...obstacleList, square4, square5]);
			const newPositions = [...obstacleList, square4, square5].map(() => {
				return {
					x: randomPx(), 
					y: randomPx()
				}
			})
			setObstaclePosition(newPositions)
		}
		if (level < 3) {
			document.getElementById("play-area").click();
			// Reset Level
			setXAxis(60);
			setYAxis(100)
			changeNetPositions()
			document.getElementById('net').classList.remove('hidden');
			document.getElementById('net2').classList.remove('hidden');
			document.getElementById('net3').classList.remove('hidden');
			// Reset Values
			setNetRemove(0);
			setLevel(level + 1);
			setPage(1);
		} else {
			setIsGameComplete(true);
		}
	}

	const DisplayModalCards = Object.keys(postGameDialogue[level]).map((pageInfo, i) => <ModalCards loadNextModal={loadNextModal} pageInfo={postGameDialogue[level][pageInfo]} page={i + 1} setIsGameComplete={setIsGameComplete} key={i} setIsQuiz={setIsQuiz} />)

	const DisplayObstacles = obstacleList.map((obstacle, i) => <ObstacleImages obstacleRef={obstacle} int={i} key={i} obstaclePosition={obstaclePosition} level={level}/>)

	// Note: When finished watching video, it closes with next video
	return (
		<>
			<a onLoad={() => document.getElementById(`load-modal-999`).click()} id={`load-modal-` + 999} data-bs-toggle="modal" data-bs-target={`#modal-` + 999 + `-Backdrop`} />
			<div className="modal fade" id={`modal-` + 999 + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<img className='pancake modal-instruction' src='./sprites/sprite-pancake-flapjack-octopus.png'></img>
				<div className="modal-dialog modal-xl modal-dialog-centered">
					<div className="modal-content">					
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5 fw-bold text-dark" id="staticBackdropLabel">Instructions</h1>
							</div>
							 <div className='row model-info'>
								<p className='modal-body'>Click on all of the ghost nets floating in the ocean, making sure to avoid the obstacles!</p>
							</div>
							<div className='modal-buttons'>
								<StartButton className='modal-continue text-light' type="button" onClick={() => user.current.focus()} data-bs-dismiss="modal">{"Start"}</StartButton>
							</div>
						</div>
					</div>
				</div>
			</div>
			{DisplayModalCards}
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<PointsContainer>
					<div><p>Net Removed: {netRemove}</p></div>
				</PointsContainer>

				<User
					style={userPlacement}
					ref={user}
					tabIndex={-1}
					onKeyDown={handleKeyDown}
					src={`/sprites/sprite-user.png`}
					className='img-size'
					alt="User's character"
				/>
				{/* Net 1 */}
				<Net
					style={netPlacement}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net}
					onClick={removeNet}
					className='img-size'
					alt="Net"
					id='net'
				/>
				{/* Net 2 */}
				<Net
					style={netPlacement2}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net2}
					onClick={removeNet}
					className='img-size'
					alt="Net2"
					id='net2'
				/>
				{DisplayObstacles}
				{/* Net 3 */}
				<Net
					style={netPlacement3}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net3}
					onClick={removeNet}
					className='img-size'
					alt="Net3"
					id='net3'
				/>
			</div>
		</>
	);
}

export function ObstacleImages(props) {
	const {obstacleRef, int, obstaclePosition, level} = props
	const [randomImage, setRandomImage] = useState(['/sprites/sprite-obstacle-log.png'])
	const [randomLocation, setRandomLocation] = useState([]);
	let imageSource = ['sprite-obstacle-log', 'sprite-obstacle-hook', 'sprite-obstacle-jellyfish']

	useState(() => {
		const images = [...Array(2)].map(() => {
			return `/sprites/`+imageSource[Math.floor(Math.random() * 3)]+`.png`;
		})
		setRandomImage(randomImage.concat(images))
		const location = [...Array(3)].map(() => {
			return randomNumber()
		})
		setRandomLocation(location)
	}, [])
	function randomNumber() {
		return Math.random() + (Math.floor(Math.random() * 2)) + 1;
	}


	let obstacleSize = 300;
	if(randomImage[level - 1] === '/sprites/sprite-obstacle-hook.png') {
		obstacleSize = 75;
	} else if (randomImage[level - 1] === '/sprites/sprite-obstacle-jellyfish.png') {
		obstacleSize = 100;
	}
	return (
		<Obstacle
			style={{ top: (obstaclePosition[int].y * 1.2) + 'px', left: (obstaclePosition[int].x * randomLocation[level - 1]) + 'px', width: obstacleSize + `px` }}
			src={randomImage[level - 1]}
			id={'square'+int}
			ref={obstacleRef}/>
	) 
}

export function ModalCards(props) {
	const { pageInfo, page, loadNextModal, setIsGameComplete, setIsQuiz } = props
	const navigate = useNavigate();
	return (
		<>
			<a id={`load-modal-` + page} data-bs-toggle="modal" data-bs-target={`#modal-` + page + `-Backdrop`} />
			<div className="modal fade" id={`modal-` + page + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog modal-xl modal-dialog-centered">
					<div className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5" id="staticBackdropLabel">{pageInfo.title}</h1>
							</div>

							{(pageInfo.type === "text" || pageInfo.type === "last") && <div className='row model-info'>
								<p className='modal-body'>{pageInfo.body}</p>
							</div>}

							{pageInfo.type === "text-list" && <div className='row model-info'>
								<p className='modal-body'>{pageInfo.body}</p>
								<p className='modal-body'>{pageInfo["body-2"]}</p>
							</div>}

							{pageInfo.type === "video" && <div className='row model-info modal-video-content video mt-1'>
								<iframe width="100%" height="100%" src={pageInfo.video} />
							</div>}

							{pageInfo.type === "input" && <div className='row model-info modal-video-content modal-input mt-1'>
								<textarea rows={3} placeholder='Type your answer here...' />
							</div>}
							<div className='modal-buttons'>
								{pageInfo.type !== "last" && <NextButton className='modal-continue' type="button" onClick={loadNextModal} data-bs-dismiss="modal">
									Continue
								</NextButton>}

								{pageInfo.type === "last" && <NextButton className='modal-continue' type="button" data-bs-dismiss="modal" onClick={() => {
									setIsGameComplete(true);
									setIsQuiz(false)
									navigate('/level2');
								}}>
									Finish
								</NextButton>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NetMiniGame;


