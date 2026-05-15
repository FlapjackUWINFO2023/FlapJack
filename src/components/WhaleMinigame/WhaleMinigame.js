import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
	Obstacle,
	Whale,
	PointsContainer,
	Trash,
	ScreenModal,
	ModalRowText,
	ModalContent,
	NextButton,
	StartButton
} from './styles.tsx';
import RemoveIgnore from '../Stories/RemoveIgnoreWhale.json';
import postRemoveDialogue from '../Stories/postWendyGame.json';

function WhaleMinigame(props) {
	const { isGameComplete, setIsGameComplete } = props;

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
	// Trash
	const [trashRemove, setTrashRemove] = useState(0);
	const [unSolvedTrash, setUnSolvedTrash] = useState([]);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	// Level
	const [level, setLevel] = useState(1)
	const [page, setPage] = useState(100);

	const [randomizeTrash, setRandomizeTrash] = useState(Object.keys(RemoveIgnore));
	const [lastResult, setLastResult] = useState(false);
	const navigate = useNavigate();

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
		checkObstacle(newPlayerCords);
	};

	// Create function to grab true XY positions
	function grabUserXPosition() {
		return user.current.offsetLeft + (user.current.width / 2);
	}

	function grabUserYPosition() {
		return user.current.offsetTop + (user.current.height / 2)
	}

	function randomPx() {
		let px = Math.floor((Math.random() * 350));
		return px;
	}

	const user = useRef(null);
	// Hard Code
	const net = useRef(null);
	const net2 = useRef(null);
	const net3 = useRef(null);
	const square = useRef(null);
	const square1 = useRef(null);
	const trash = useRef(null);
	const trash2 = useRef(null);
	const trash3 = useRef(null);
	const trash4 = useRef(null);
	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		setObstacleList([square, square1]);

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' });
		document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-whale-stomach.png)`;
		setRandomizeTrash(shuffle(Object.keys(RemoveIgnore)));
		const trashList = [...Array(10)].map((e, i) => {
			return `trash-image-`+i;
		})
		setUnSolvedTrash(trashList)
		document.getElementById(`load-modal-999`).click()
	}, [shuffle]);

	function checkWithinRange(newPlayerCords) {
		if (Math.sqrt((user.current.x - net.current.x) ** 2 + (user.current.y - net.current.y) ** 2) <= 400) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}
		if (Math.sqrt((user.current.x - net2.current.x) ** 2 + (user.current.y - net2.current.y) ** 2) <= 400) {
			document.getElementById('net2').classList.add('in-range');
		} else {
			document.getElementById('net2').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - net3.current.x) ** 2 + (user.current.y - net3.current.y) ** 2) <= 400) {
			document.getElementById('net3').classList.add('in-range');
		} else {
			document.getElementById('net3').classList.remove('in-range');
		}
		unSolvedTrash.forEach((trash, i) => {
			const trashPosition = grabTrashPoistion(document.getElementById(trash))
			if ((newPlayerCords.xPosition - trashPosition.x) <= 150 && (newPlayerCords.xPosition - trashPosition.x) >= -150 
				&& (newPlayerCords.yPosition - trashPosition.y) <= 100 && (newPlayerCords.yPosition - trashPosition.y) >= -100) {
				document.getElementById(trash).classList.add('in-range');	
			} else {
				document.getElementById(trash).classList.remove('in-range');
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

	function grabTrashPoistion(refObject) {
		const objectX = refObject.offsetLeft + (refObject.width / 2)
		const objectY = refObject.offsetTop + (refObject.height / 2)
		return ({
			x: objectX,
			y: objectY,
			leftEdge: objectX - (refObject.width / 2),
			rightEdge: objectX + (refObject.width / 2),
			topEdge: objectY - (refObject.height / 2),
			bottomEdge: objectY + (refObject.height / 2)
		})
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
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	const loadNextPage = () => {
		let newPage = page - 1;
		setPage(newPage);
		console.log(newPage, "newPage")
		document.getElementById("load-modal-" + (page - 1)).click();
	}

	if (lastResult && trashRemove === 10 && netRemove === 3 && page === 100) {
		document.getElementById("load-modal-100").click();
	}

	const objectList = randomizeTrash.map((object, i) => <ModalCards int={i} key={i} object={object} user={user} setCorrectCount={setTrashRemove} correctCount={trashRemove} setLastResult={setLastResult} unSolvedTrash={unSolvedTrash}/>);
	const pageList = Object.keys(postRemoveDialogue[1]).map((pageInfo, i) => <VidCards pageInfo={postRemoveDialogue[1][pageInfo]} page={100 - i} key={i} loadNextModal={loadNextPage} setIsQuiz={props.setIsQuiz} setIsGameComplete={props.setIsGameComplete} />);
	const DisplayObstacles = [square, square1].map((obstacle, i) => <ObstacleImages obstacleRef={obstacle} int={i} key={i} />)

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
								<p className='modal-body'>Click on all of the ghost nets and trash floating in Wendy’s stomach to help her feel better! Be sure to avoid any obstacles!!</p>
							</div>
							<div className='modal-buttons'>
								<StartButton className='modal-continue text-light' type="button" onClick={() => user.current.focus()} data-bs-dismiss="modal">{"Start"}</StartButton>
							</div>
						</div>
					</div>
				</div>
			</div>
			{pageList}
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<PointsContainer>
					<div><p>Net Removed: {netRemove}</p></div>
					<div><p>Trash Removed: {trashRemove}</p></div>
				</PointsContainer>

				{(level === 3) && <Whale
					src={'/sprites/sprite-wendy-whale.png'}
				/>}

				<User
					style={userPlacement}
					ref={user}
					tabIndex={-1}
					onKeyDown={handleKeyDown}
					src={`/sprites/sprite-user.png`}
					id='playable'
					className='img-size'
					alt="User's character"
				/>
				{DisplayObstacles}
				{/* Net 1 */}
				<Net
					style={netPlacement}
					src={`/sprites/sprite-net-no-fish.png`}
					ref={net}
					onClick={removeNet}
					className='img-size'
					alt="Net"
					id='net'
				/>
				{/* Net 2 */}
				<Net
					style={netPlacement2}
					src={`/sprites/sprite-net-no-fish.png`}
					ref={net2}
					onClick={removeNet}
					className='img-size'
					alt="Net2"
					id='net2'
				/>
				{/* Net 3 */}
				<Net
					style={netPlacement3}
					src={`/sprites/sprite-net-no-fish.png`}
					ref={net3}
					onClick={removeNet}
					className='img-size'
					alt="Net3"
					id='net3'
				/>
				{objectList}
			</div>
		</>
	);
}

function ModalCards(props) {
	// text result is the explanation of the remove/ignore
	const [textResult, setTextResult] = useState()
	// Image result is the image of the trash
	const [imageResult, setImageResult] = useState()
	// xPostion of the randomized trash placement
	const [xPosition, setXPosition] = useState()
	// yPostion of the randomized trash placement
	const [yPosition, setYPosition] = useState()
	// correct answer of choosing remove or ignore, based on json data choices
	const [correctAnswer, setCorrectAnswer] = useState()


	const { object, int, user, unSolvedTrash } = props;
	const objectData = RemoveIgnore[object]
	const item = useRef(null);

	const [solved, setSolved] = useState(false)

	const { setCorrectCount, correctCount, setLastResult } = props;

	const isInRange = (event) => {
		return (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 400) || (event.target.classList.contains('in-range'));
	}

	const removeTrash = (event, targetID) => {
		if (isInRange(event) && !solved) {
			document.getElementById("load-modal-" + int).click();
		}
	}

	const onLoad = () => {
		setImageResult(objectData.image)
		setXPosition(Math.floor(Math.random() * 8) + 1)
		setYPosition(Math.floor(Math.random() * 25) + 1)
	}

	const onClickRemove = () => {
		setImageResult(objectData.image)
		if (objectData.remove) {
			setCorrectCount(correctCount + 1)
			setTextResult(objectData.correct)
			document.getElementById("trash-image-" + int).classList.add('hidden');
			setCorrectAnswer(true)
			setSolved(true)
			updateTrashList()
		}
		else {
			setTextResult(objectData.incorrect)
			setCorrectAnswer(false)
		}


	}
	const onClickIgnore = () => {
		if (!objectData.remove) {
			setTextResult(objectData.correct)
			setCorrectAnswer(true)
			setCorrectCount(correctCount + 1)
			setSolved(true)
			document.getElementById("trash-image-" + int).classList.remove('in-range');
			document.getElementById("trash-image-" + int).classList.add('ignore');
			updateTrashList()
		}
		else {
			setTextResult(objectData.incorrect)
			setCorrectAnswer(false)
		}
	}

	function updateTrashList() {
		const index = unSolvedTrash.indexOf("trash-image-" + int);
		unSolvedTrash.splice(index, 1)
	}

	const closeModal = () => {
		setTextResult();
		setCorrectAnswer();
		if (correctCount === 10) {
			setLastResult(true)
		}
	}

	return (
		<>
			{/* <a  /> */}
			<img className='trash sprite-normal' onClick={(event) => removeTrash(event, "modal-remove-" + int)} style={{ top: yPosition + "%", left: xPosition + "%"}} id={"trash-image-" + int} ref={item} src='./sprites/sprite-trash.png'></img>
			<a onLoad={onLoad} id={"load-modal-" + int} data-bs-toggle="modal" data-bs-target={`#modal-` + int + `-Backdrop`} >
				<ScreenModal className="modal" id={`modal-` + int + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg modal-dialog-centered">
						<img className='pancake' src='./sprites/sprite-pancake-flapjack-octopus.png'></img>
						<ModalContent className="modal-content">
							<div className='container modal-containers'>
								<img className='picture' src={imageResult} />

								<ModalRowText className='row model-info modal-video-content mt-1'>
									<h1 className="removeTitle" id="staticBackdropLabel">{object}</h1>
									{(textResult === undefined) && <button className="removebtn" onClick={onClickRemove}>Remove from Wendy</button>}
									{(textResult === undefined) && <button className="ignorebtn" onClick={onClickIgnore}>Ignore</button>}
									<div />
									<div className="container text-container">
										<p className="post">
											{/* {textResult} */}
											{(correctAnswer &&
												<p><span className='text-success'>Correct!</span> {textResult}</p>) || (correctAnswer !== undefined && <p><span className='text-danger'>Uh Oh!</span> {textResult}</p>)}
										</p>
									</div>
								</ModalRowText>
								<button className='next' type="button" data-bs-dismiss="modal" onClick={closeModal}>Next</button>
							</div>
						</ModalContent>
					</div>
				</ScreenModal>
			</a>
		</>
	);
};

function shuffle(array) {
	return array.sort(() => Math.random() - .5);
}

export function VidCards(props) {
	const { pageInfo, page, loadNextModal, setIsGameComplete, setIsQuiz } = props
	const navigate = useNavigate();
	return (
		<>
			<a id={`load-modal-` + page} data-bs-toggle="modal" data-bs-target={`#modal-` + page + `-Backdrop`} />
			<div className="modal fade" id={`modal-` + page + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
								<textarea rows={3} placeholder="Type your answer here..." />
							</div>}
							<div className='modal-buttons'>
								{pageInfo.type !== "last" && <NextButton className='modal-continue' type="button" onClick={loadNextModal} data-bs-dismiss="modal">
									Continue
								</NextButton>}

								{pageInfo.type === "last" && <NextButton className='modal-continue' type="button" data-bs-dismiss="modal" onClick={() => {
									setIsGameComplete(true);
									setIsQuiz(false);
									navigate('/level3');
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

export function ObstacleImages(props) {
	const {obstacleRef, int, level} = props
	const [randomLocation, setRandomLocation] = useState({x: 0, y: 0});

	useState(() => {	
		setRandomLocation({
			x: 200 + (randomPx() * (Math.floor(Math.random() * 2.5)) + 1),
			y: Math.floor((Math.random() * 300) + 100)
		})
	}, [])

	function randomPx() {
		let px = Math.floor((Math.random() * 300) + 100);
		return px;
	}

	return (
		<Obstacle
			style={{ top: (randomLocation.y * 1.2) + 'px', left: randomLocation.x + 'px', width: 75 + `px` }}
			src={'/sprites/sprite-obstacle-hook.png'}
			id={'square'+int}
			ref={obstacleRef}/>
	) 
}

export default WhaleMinigame;

