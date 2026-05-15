import React, { useEffect, useRef, useState } from 'react';
import {
	Fish,
	User,
	Net,
	Flapjack,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import { useNavigate } from 'react-router-dom';
import ComicView from '../innerComp/ComicView';

function Play() {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);

	// Nets
	const [netPlacement, setNetPlacement] = useState({});
	const [netPlacement2, setNetPlacement2] = useState({});
	const [netPlacement3, setNetPlacement3] = useState({});
	const [netRemove, setNetRemove] = useState(0);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const flapjackPlacement = { top: 20 + 'px', left: 80 + 'px' }
	const navigate = useNavigate();

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


	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	const fish = useRef(null);
	const flapjack = useRef(null);

	useEffect(() => {
		user.current.focus();
		fish.current.focus();
		flapjack.current.focus();
	}, []);

	const handleWithinRange = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 400) {
			navigate('/level1');
		}
	}

	function checkWithinRange() {
		if (Math.sqrt((user.current.x - fish.current.x) ** 2 + (user.current.y - fish.current.y) ** 2) <= 400) {
			document.getElementById('sally-salmon').classList.add('in-range');
		} else {
			document.getElementById('sally-salmon').classList.remove('in-range');
		}
	}

	const removeNet = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	return (
		<div className='play-area' onClick={() => user.current.focus()}>
			<span className="badge text-bg-secondary net-counter">Net Removed: {netRemove}</span>
			{/* User */}
			<User
				style={userPlacement}
				ref={user}
				tabIndex={-1}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-user-placeholder.png`}
				id='playable'
				className='img-size'
				alt="User's character"
			/>
			{/* Fish */}
			<Fish
				src={`/sprites/sprite-sally-salmon.png`}
				ref={fish}
				onClick={handleWithinRange}
				className='img-size seal'
				id='sally-salmon'
				alt="Sally the salmon"
			/>

			<Flapjack
				style={userPlacement}
				ref={Flapjack}
				tabIndex={-1}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-pancake-flapjack-octopus.png`}
				id='playable'
				className='img-size'
				alt="Pancake the flapjack"
			/>
		</div>
	);
}


export default Play;


