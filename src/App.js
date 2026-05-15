import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Parents from './components/Parents/Parents';
import Resources from './components/Resources/Resources';
import EditorPage from './components/EditorPage/EditorPage';
import Levels from './components/Levels/Levels';

import NetMiniGame from './components/NetMinigame/NetMiniGame';
import WhaleMinigame from './components/WhaleMinigame/WhaleMinigame';
import Tutorial from './components/Tutorial/Tutorial';
import Quiz from './components/Quiz/Quiz';

import FlapGuide from './components/FlapjackGuide/FlapGuide';
import SeaGuide from './components/SeagullGuide/SeaGuide';

import EnterWhale from './components/EnterWhale/EnterWhale';
import RemoveActivity from './components/RemoveActivity/RemoveActivity';

import Level1_VisualNovel from './components/VisualNovel/Level1_VN/Level1_VisualNovel';
import Level2_VisualNovel from './components/VisualNovel/Level2_VN/Level2_VisualNovel';
import Level3_VisualNovel from './components/VisualNovel/Level3_VN/Level3_VisualNovel';

import LEVEL1 from './components/Stories/Level1';
import LEVEL2 from './components/Stories/Level2';
import LEVEL3 from './components/Stories/Level3';

function App() {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [isFlapGuide, setIsFlapGuide] = useState(false);
	const [isSeaGuide, setIsSeaGuide] = useState(false);
	const [isEnterWhale, setIsEnterWhale] = useState(false);
	const [isGame1Complete, setIsGame1Complete] = useState(false);
	const [isGame2Complete, setIsGame2Complete] = useState(false);
	const [isGame3Complete, setIsGame3Complete] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [amountQuestionsTake, setAmountQuestionsTake] = useState(1);
	const [isQuiz, setIsQuiz] = useState(false);
	const [levelOnePath, setLevelOnePath] = useState();
	const [levelThreePath, setLevelThreePath] = useState();
	const { history } = useLocation();

	const ScrollToTop = () => {
		window.scrollTo({left: 0, top: 0, behavior: 'instant'});
		  return (null);
	}


	return (
		<div className='page-container'>
			<div className='fill-content'>
			<ScrollToTop history={history} />
				<Routes>
					<Route path='/' element={
						<>
							<Navbar />
							<Home />
						</>
					} />
					<Route path='/about' element={
						<>
							<Navbar />
							<About />
						</>
					} />
					<Route path='/parents' element={
						<>
							<Navbar />
							<Parents />
						</>
					} />
					<Route path='/resources' element={
						<>
							<Navbar />
							<Resources />
						</>
					} />
					<Route path='/levels' element={
						<>
							<Navbar />
							<Levels setQuestionNumber={setQuestionNumber} setIsQuiz={setIsQuiz}/>
						</>
					} />
					<Route path='/play' element={
						<>
							<NetMiniGame isGameComplete={isGame2Complete} setIsGameComplete={setIsGame2Complete} setIsQuiz={setIsQuiz}/>
						</>
					} />
					<Route path='/play-whale' element={
						<>
							<WhaleMinigame isGameComplete={isGame3Complete} setIsGameComplete={setIsGame3Complete} setIsQuiz={setIsQuiz}/>
						</>
					} />
					<Route path='/play-seagull' element={<RemoveActivity isGameComplete={isGame1Complete} setIsGameComplete={setIsGame1Complete} setIsQuiz={setIsQuiz}/>}/>
					<Route path='/enter-wendy' element={<EnterWhale isEnterWhale={isEnterWhale} setIsEnterWhale={setIsEnterWhale} />} />
					<Route path='/flapguide' element={
						<>
							<FlapGuide isFlapGuide={isFlapGuide} setIsFlapGuide={setIsFlapGuide} />
						</>
					} />
					<Route path='/seaguide' element={
						<>
							<SeaGuide isSeaGuide={isSeaGuide} setIsSeaGuide={setIsSeaGuide} />
						</>
					} />
					<Route path='level1' element={
						<>
							<Level1_VisualNovel
								level={LEVEL1}
								isSeaGuide={isSeaGuide}
								setIsSeaGuide={setIsSeaGuide}
								isGameComplete={isGame1Complete}
								setIsGameComplete={setIsGame1Complete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								levelOnePath={levelOnePath}
								setLevelOnePath={setLevelOnePath}
								setCurrentLevel={setCurrentLevel}
							/>
						</>
					} />
					<Route path='level2' element={
						<>
							<Level2_VisualNovel
								level={LEVEL2}
								isFlapGuide={isFlapGuide}
								setIsFlapGuide={setIsFlapGuide}
								isGameComplete={isGame2Complete}
								setIsGameComplete={setIsGame2Complete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								setCurrentLevel={setCurrentLevel}
							/>
						</>
					} />
					<Route path='level3' element={
						<>
							<Level3_VisualNovel
								level={LEVEL3}
								isFlapGuide={isFlapGuide}
								setIsFlapGuide={setIsFlapGuide}
								isGameComplete={isGame3Complete}
								setIsGameComplete={setIsGame3Complete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								setCurrentLevel={setCurrentLevel}
								isEnterWhale={isEnterWhale}
								setIsEnterWhale={setIsEnterWhale}
								levelThreePath={levelThreePath}
								setLevelThreePath={setLevelThreePath}
							/>
						</>
					} />
					<Route path="/tutorial" element={<Tutorial currentLevel={currentLevel} />} />
					<Route path='/quiz' element={
						<Quiz
							questionNumber={questionNumber}
							setQuestionNumber={setQuestionNumber}
							amountQuestionsTake={amountQuestionsTake}
							setAmountQuestionsTake={setAmountQuestionsTake}
							isQuiz={isQuiz}
							setIsQuiz={setIsQuiz}
						/>
					} />
					<Route path='/storyteller/editor' element={<EditorPage />} />
				</Routes>
			</div>
			{/* <footer /> */}
		</div>
	);
}

export default App;