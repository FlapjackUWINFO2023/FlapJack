import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    VisualNovelContainer,
    DialogueBox,
    DialogueImg,
    DialogueMessageContainer,
    SpeakerContainer,
    ExitButton,
    NextButton,
    BackButton,
    TermContainer,
} from '../styles.tsx';
import TERMS from './Terms.js';

function VisualNovel(props) {
    const [loadGame, setLoadGame] = useState(false);
    const {
        level,
        isSeaGuide,
        setIsSeaGuide,
        isGameComplete,
        setIsGameComplete,
        isQuiz,
        setIsQuiz,
        setQuestionNumber,
        levelOnePath,
        setLevelOnePath,
        setCurrentLevel
    } = props;
    let currentScene = level['pancakeIntro'];
    let dialoguePosition = 0;
    const navigate = useNavigate();

    useEffect(() => {
        if (isSeaGuide && !isGameComplete && !isQuiz) {
            clearSprites();
            currentScene = level['shawnIntro'];
            buildDialogue();
        } else if (isQuiz) {
            clearSprites();
            console.log(levelOnePath);
            if(levelOnePath === "shawnCardGame1") {
                currentScene = level['shawnQuestion1'];
            } else if (levelOnePath === 'shawnIntro') {
                currentScene = level['shawnQuestion2'];
            } else if (levelOnePath === "shawnCardGame2") {
                currentScene = level['shawnQuestion3'];
            } else {
                currentScene = level['shawnQuestion2'];
            }
            buildDialogue();
            document.getElementById('backBtn').disabled = true;
        } else if (isGameComplete) {
            clearSprites();
            currentScene = level['postGame'];
            console.log(currentScene);
            document.getElementById('backBtn').disabled = true;
            buildDialogue();
        } else {
            currentScene = level['pancakeIntro'];
            document.getElementById('backBtn').disabled = true;
        }
        if (currentScene === level['pancakeIntro']
            || currentScene === level['shawnIntro']
            || currentScene === level['minigame']
            || currentScene === level['end']) {
            document.getElementById('backBtn').disabled = true;
        }
        document.getElementById('nextBtn').disabled = false;
    }, [isSeaGuide, isGameComplete]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function nextScene(scene) {
        if (scene === undefined) {
            setLoadGame(true);
        }

        if (scene.background) {
            document.getElementById('visual-novel-container').style.backgroundImage = `url(/sprites/bg-${scene.background}.png)`;
        }

        if (scene.nextScene === 'clickMap') {
            createClickSpace();
        } else {
            clearClickSpaces();
            clearSprites();
        }

        createBaseFrame(scene.baseFrame);
        createImage(scene.frames);

        if (scene === level['shawnCardGame1'] || scene === level['shawnCardGame2'] || scene === level['shawnCardGame3'] || scene === level['shawnCardGame4']) {
            createCards();
            document.getElementById('nextBtn').disabled = true;
        } else {
            clearCards();
        }

        document.querySelector('.message-container p').textContent = scene.dialogue[dialoguePosition].message;
        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
        }

        if (scene.dialogue[dialoguePosition].type === 'nospeaker') {
            document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-nospeaker.png');
        } else {
            if (scene.dialogue[dialoguePosition].type === 'left') {
                document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-left.png');
            } else {
                document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-right.png');
            }
        }

        if (scene.dialogue[dialoguePosition].keyword) {
            if (typeof scene.dialogue[dialoguePosition].keyword === 'object') {
                scene.dialogue[dialoguePosition].keyword.map((keyword) => buildTerm(keyword));
            } else {
                buildTerm(scene.dialogue[dialoguePosition].keyword);
            }
        }
    }

    function createCards() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        let images = ['trash1', 'no_trash1', 'trash2', 'no_trash2', 'trash3', 'no_trash3'];
        let explanations = [
            'Trash islands can clutter up and form a platform of trash on the ocean.',
            "No trash islands here, those are just fish.",
            'Trash islands can contain nets that pull other trash in the ocean together.',
            'Just rocks here!',
            'Trash islands can have a lot of plastic bottles, food containers, and plastic bags.',
            'No trash islands here, those are just fish.',
        ]
        let count = 0;
        let correctCount = 0;

        for (let i = 0; i < 2; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            while (count < 3) {
                const card = document.createElement('div');
                card.classList.add('card');

                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');

                const imageFront = document.createElement('img');
                imageFront.setAttribute('src', `/imgs/cards/trashIslands/${images[0]}.png`);
                imageFront.setAttribute('alt', `${images[0]}`);
                imageFront.classList.add('front-image');

                const imageBack = document.createElement('div');
                const text = document.createElement('p');
                const explanation = document.createElement('p');
                const correct = document.createElement('span');
                const incorrect = document.createElement('span');

                correct.classList.add('correct-text');
                incorrect.classList.add('incorrect-text');

                correct.textContent = "Correct!";
                incorrect.textContent = "Uh Oh!";

                if (!images[0].includes('_')) {
                    text.appendChild(correct);
                    text.classList.add('correct-text');
                } else {
                    text.appendChild(incorrect);
                    text.classList.add('incorrect-text');
                }
                explanation.textContent = ' ' + explanations[0];
                explanation.classList.add('explanation');

                text.appendChild(explanation);

                imageBack.appendChild(text);
                imageBack.classList.add('back-image');

                cardInner.appendChild(imageFront);
                cardInner.appendChild(imageBack);

                card.appendChild(cardInner);

                card.addEventListener('click', (event) => {
                    card.classList.toggle('card-clicked');
                    if (!event.target.alt.includes('_')) {
                        correctCount++;
                    }
                    if (correctCount === 3) {
                        document.getElementById('nextBtn').disabled = false;
                    }
                });

                row.appendChild(card);
                images.shift();
                explanations.shift();
                count++;
            }
            count = 0;
            cardContainer.append(row);
        }

        document.getElementById('visual-novel-container').appendChild(cardContainer);
    }

    function clearCards() {
        let cards = document.getElementsByClassName('card');
        if (cards) {
            while (cards[0]) {
                cards[0].parentNode.removeChild(cards[0]);
            }
        }
    }

    function createClickSpace() {
        const clickSpaces = document.createElement('div');
        clickSpaces.classList.add('space');
        clickSpaces.setAttribute('style', 'display: flex;');

        const correctClickSpace = document.createElement('div');
        correctClickSpace.setAttribute('style', 'width: 550px; height: 600px; margin: 0;');
        correctClickSpace.addEventListener('click', () => {
            document.getElementById('nextBtn').disabled = false;
            currentScene = level['pacificOcean_correct'];
            nextScene(currentScene);
        });

        const incorrectClickSpace = document.createElement('div');
        incorrectClickSpace.setAttribute('style', 'width: 1500px; height: 600px; margin: 0');
        incorrectClickSpace.addEventListener('click', () => {
            document.getElementById('nextBtn').disabled = false;
            currentScene = level['pacificOcean_incorrect'];
            nextScene(currentScene);
        });

        let container = document.getElementById('visual-novel-container');
        clickSpaces.appendChild(correctClickSpace);
        clickSpaces.appendChild(incorrectClickSpace);
        container.appendChild(clickSpaces);
    }

    function clearClickSpaces() {
        let spaces = document.getElementsByClassName('space');
        if (spaces) {
            while (spaces[0]) {
                spaces[0].parentNode.removeChild(spaces[0]);
            }
        }
    }

    function clearSprites() {
        let sprites = document.getElementsByClassName('sprite-container');
        if (sprites) {
            while (sprites[0]) {
                sprites[0].parentNode.removeChild(sprites[0]);
            };
        }
    }

    function createBaseFrame(baseFrame) {
        let dialogue = document.getElementById('dialogue');
        if (dialogue) {
            if (baseFrame) {
                if (baseFrame.length > 0) {
                    return baseFrame.forEach((sprite) => {
                        const spriteContainer = document.createElement('div');
                        spriteContainer.setAttribute('class', 'sprite-container');

                        let spriteSize = sprite.size;
                        if (sprite.image === 'user-placeholder') {
                            spriteSize = sprite.size - 5;
                            spriteContainer.setAttribute('style', `position: absolute; top: 0;`);
                        } else if (sprite.image === 'pancake-flapjack-octopus' && currentScene.dialogue[0].type === 'nospeaker') {
                            spriteContainer.setAttribute('style', `position: absolute; top: 80%; z-index: 3;`);
                        }  else if (sprite.image === 'pancake-bowl') {
                            spriteContainer.setAttribute('style', `position: absolute; top: ${sprite.y}%`);
                        } else {
                            spriteContainer.setAttribute('style', `position: absolute; top: 40%;`);
                        }

                        const newSprite = document.createElement('img');

                        newSprite.setAttribute('src', `/sprites/sprite-${sprite.image}.png`);
                        newSprite.setAttribute('width', `${spriteSize}%`);
                        newSprite.setAttribute('class', 'sprite');

                        if (sprite.image === 'pancake-bowl') {
                            newSprite.setAttribute('style', `position: absolute; z-index: 3; left: ${sprite.x}%; top: ${sprite.y}%; transform: scaleX(${sprite.flipX ? -1 : 1});`);
                        } else {
                            newSprite.setAttribute('style', `position: absolute; left: ${sprite.x}%; top: ${sprite.y}%; transform: scaleX(${sprite.flipX ? -1 : 1});`);
                        }
                        spriteContainer.appendChild(newSprite);

                        dialogue.appendChild(spriteContainer);
                    });
                }
            }
        }
    }

    function createImage(frames) {
        let dialogue = document.getElementById('dialogue');
        if (frames) {
            if (frames.length > 0) {
                if (dialogue) {
                    frames.forEach((sprite) => {
                        const spriteContainer = document.createElement('div');
                        spriteContainer.setAttribute('class', 'sprite-container');

                        let spriteSize = sprite.size;
                        if (sprite.image === 'user-placeholder') {
                            spriteSize = sprite.size - 5;
                            spriteContainer.setAttribute('style', `position: absolute; top: 0;`);
                        } else if (sprite.image === 'pancake-flapjack-octopus' && currentScene.dialogue[0].type === 'nospeaker') {
                            spriteContainer.setAttribute('style', `position: absolute; top: 80%; z-index: 3;`);
                        } else if (sprite.image === 'pancake-bowl') {
                            spriteContainer.setAttribute('style', `position: absolute; top: ${sprite.y}%`);
                        }

                        const newSprite = document.createElement('img');

                        newSprite.setAttribute('src', `/sprites/sprite-${sprite.image}.png`);
                        newSprite.setAttribute('width', `${spriteSize}%`);
                        newSprite.setAttribute('class', 'sprite-normal');

                        if (sprite.image === 'pancake-bowl') {
                            newSprite.setAttribute('style', `position: absolute; z-index: 3; left: ${sprite.x}%; top: ${sprite.y}%; transform: scaleX(${sprite.flipX ? -1 : 1});`);
                        } else {
                            newSprite.setAttribute('style', `position: absolute; left: ${sprite.x}%; top: ${sprite.y}%; transform: scaleX(${sprite.flipX ? -1 : 1});`);
                        }
                        spriteContainer.appendChild(newSprite);

                        dialogue.appendChild(spriteContainer);
                    });
                } else {
                    return frames.map((sprite) => {
                        return (
                            <div className='sprite-container' style={{position: 'absolute', top: `${sprite.y}%`}}>
                                <img
                                    src={`./sprites/sprite-${sprite.image}.png`}
                                    style={{
                                        width: `${sprite.size}%`,
                                        position: 'absolute',
                                        top: `${sprite.y}%`,
                                        left: `${sprite.x}%`,
                                        transform: `scaleX(${sprite.flipX ? -1 : 1}`,
                                        maxHeight: '100vh'
                                    }}
                                    className='sprite-normal'
                                />
                            </div>
                        )
                    });
                }
            }
        }
    }

    function buildMultipleTerms(keywords) {
        let dialogue = document.querySelector('.message-container p');
        let message = currentScene.dialogue[dialoguePosition].message;
        let keywordPosition = 0;
        let keyword = keywords[keywordPosition];
        let popups = keywords.map((keyword) => {
            return `
                <div class="popup">
                    ${keyword}
                    <div class="keyword">
                        <h4>${capitalizeFirstLetter(keyword)}</h4>
                        <img src='./imgs/audio.png' alt='Audio symbol' />
                    </div>
                    <p>${TERMS[keyword]}</p>
                </div>
            `
        });
        message = message.replace(keywords[keywordPosition], popups);
        dialogue.innerHTML = message;

        document.querySelectorAll('.popup').forEach((button) => {
            button.addEventListener('click', () => {
                let popup = document.querySelector('.keyword');
                popup.classList.add('show');
                buildTermDefinition(keyword);
            });
        });
        keywordPosition += 1;
    }

    function buildTerm(keyword) {
        let dialogue = document.querySelector('.message-container p');
        let message = currentScene.dialogue[dialoguePosition].message;
        message = message.replace(keyword,
            `<div class="popup">
                ${keyword}
                <div class="keyword">
                    <div>
                        <h4>${capitalizeFirstLetter(keyword)}</h4>
                    </div>
                    <p>${TERMS[keyword]}</p>
                </div>
            </div>`)
        dialogue.innerHTML = message;

        document.querySelectorAll('.popup').forEach((button) => {
            button.addEventListener('click', () => {
                let popup = document.querySelector('.keyword');
                popup.classList.add('show');
                buildTermDefinition(keyword);
            });
        });
    }

    function buildTermDefinition(keyword) {
        return (
            <TermContainer>
                <h4>{keyword}</h4>
                <p>{TERMS[keyword]}</p>
            </TermContainer>
        );
    }

    function buildDialogue() {
        if (document.getElementById('dialogue')) {
            document.getElementById('dialogue').innerHTML = '';
            document.getElementById('dialogue').classList.remove('vn-decision');
        }

        let type = currentScene.dialogue[dialoguePosition].type;
        let image = '';
        if (type === 'nospeaker') {
            image = '/sprites/misc-textbubble-nospeaker.png';
        } else if (type === 'left') {
            image = '/sprites/misc-textbubble-left.png';
        } else {
            image = '/sprites/misc-textbubble-right.png';
        }

        let message = currentScene.dialogue[dialoguePosition].message;
        if (isSeaGuide && !isGameComplete) {
            message = 'Hello! I’m Shawn the Seagull! I’m a ring billed seagull.';
        } else if (isGameComplete) {
            message = 'Wow! Thank you so much for helping to remove all of the dangerous ghost nets near me and my friends!';
        } else if (levelOnePath === 'shawnCardGame1' || levelOnePath === 'shawnIntro' || levelOnePath === 'shawnCardGame2')  {
            message = "It's gotten really tangled up that I can't get out of it easily.";
        }

        if (currentScene.dialogue[dialoguePosition].keyword) {
            if (typeof currentScene.dialogue[dialoguePosition].keyword === 'object') {
                buildMultipleTerms(currentScene.dialogue[dialoguePosition].keyword);
            } else {
                buildTerm(currentScene.dialogue[dialoguePosition].keyword);
            }
        }

        return (
            <>
                <DialogueImg src={image} alt="Text bubble background" className='textBox' id="dialogueBox" />
                <DialogueMessageContainer className="message-container">
                    <p>{message}</p>
                </DialogueMessageContainer>
                {createBaseFrame(currentScene.baseFrame)}
                {createImage(currentScene.frames)}
                {
                    currentScene.dialogue[dialoguePosition].speaker.length > 0 &&
                    <SpeakerContainer className="speaker-container">
                        <span>{currentScene.dialogue[dialoguePosition].speaker}</span>
                    </SpeakerContainer>
                }
            </>
        );
    }

    function buildChoice(nextScene) {
        let dialogue = document.getElementById('dialogue');
        let newDiv = document.createElement('div');

        Object.keys(nextScene).forEach((choice) => {
            const newButton = document.createElement('button');
            newButton.classList.add('choiceButton');
            newButton.setAttribute('key', nextScene[choice]);
            newButton.textContent = choice;
            newDiv.appendChild(newButton);
        });

        newDiv.classList.add('vn-decision');
        dialogue.appendChild(newDiv);
    }

    function buildVisuals() {
        return (
            <VisualNovelContainer id='visual-novel-container' backgroundImage={`url(/sprites/bg-${currentScene.background}.png)`}>
                <ExitButton onClick={
                    () => {
                        setIsSeaGuide(false);
                        setIsGameComplete(false);
                        dialoguePosition = 0;
                        currentScene = level['pancakeIntro'];
                        document.getElementById('backBtn').disabled = true;
                        navigate('/');
                    }
                }>Exit</ExitButton>
                <BackButton id='backBtn' onClick={(event) => {
                    document.getElementById('nextBtn').disabled = false;
                    if (dialoguePosition > 0) {
                        dialoguePosition--;
                        if (currentScene.dialogue[dialoguePosition].keyword) {
                            buildTerm(currentScene.dialogue[dialoguePosition].keyword);
                        }
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                        if (dialoguePosition === 0) {
                            if (currentScene.previousScene === undefined) {
                                event.target.disabled = true;
                            } else {
                                event.target.disabled = false;
                            }
                        } else {
                            event.target.disabled = false;
                        }
                    } else {
                        dialoguePosition = 0;
                        event.target.disabled = true;
                        if (currentScene.previousScene === 'sallyTalking2') {
                            dialoguePosition = 0;
                            event.target.disabled = false;
                            currentScene = level['sallyTalking2'];
                            buildDialogue();
                            nextScene(currentScene);
                        } else if (typeof currentScene.previousScene === 'object') {
                            dialoguePosition = 0;
                            currentScene = level['sallyTalking'];
                            event.target.disabled = true;
                            buildDialogue();
                            nextScene(currentScene);
                        } else if (currentScene.previousScene === undefined && dialoguePosition === 0) {
                            event.target.disabled = true;
                        } else if (currentScene.previousScene === 'pancakeNorthAmerica') {
                            document.getElementById('nextBtn').disabled = true;
                            currentScene = level[currentScene.previousScene];
                            dialoguePosition = currentScene.dialogue.length - 1;
                            event.target.disabled = false;
                            createImage(currentScene.frames);
                            buildDialogue();
                            nextScene(currentScene);
                        } else if (currentScene.previousScene !== undefined) {
                            currentScene = level[currentScene.previousScene];
                            dialoguePosition = currentScene.dialogue.length - 1;
                            event.target.disabled = false;
                            createImage(currentScene.frames);
                            buildDialogue();
                            nextScene(currentScene);
                        }
                    }
                }}>Back</BackButton>
                <NextButton id='nextBtn' onClick={(nextEvent) => {
                    document.getElementById('backBtn').disabled = false;
                    if (dialoguePosition < currentScene.dialogue.length - 1) {
                        dialoguePosition++;
                        if (currentScene.dialogue[dialoguePosition].keyword) {
                            buildTerm(currentScene.dialogue[dialoguePosition].keyword);
                        }
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                    } else {
                        dialoguePosition = 0;
                        if (typeof currentScene.nextScene === 'object') {
                            nextEvent.target.disabled = true;
                            // Display the choice scene
                            buildChoice(currentScene.nextScene);
                            document.querySelectorAll('.choiceButton').forEach((button) => {
                                button.addEventListener('click', (e) => {
                                    nextEvent.target.disabled = false;
                                    currentScene = level[e.target.getAttribute('key')];
                                    if (e.target.getAttribute('key') === 'tutorial') {
                                        setCurrentLevel(1);
                                        document.querySelector('body').classList.add('fade');
                                        navigate('/tutorial');
                                    } else if (e.target.getAttribute('key') === 'end') {
                                        setIsGameComplete(false);
                                        navigate('/')
                                    } else {
                                        buildDialogue();
                                        nextScene(currentScene);
                                    }
                                });
                            });
                        } else if (currentScene.nextScene === 'minigame') {
                            navigate('/play-seagull');
                        } else if (currentScene.nextScene === 'end') {
                            setIsGameComplete(false);
                            navigate('/');
                        } else if (currentScene.nextScene === 'quiz') {
                            setLevelOnePath(currentScene.previousScene);
                            setQuestionNumber(3);
                            setIsQuiz(true);
                            setIsSeaGuide(false);
                            navigate('/quiz');
                        } else {
                            clearSprites();
                            currentScene = level[currentScene.nextScene];
                            if (currentScene.nextScene === 'clickMap') {
                                nextEvent.target.disabled = true;
                            }
                            nextScene(currentScene);
                        }
                    }
                }}>
                    Next
                </NextButton>
                {buildDialogue()}
            </VisualNovelContainer>
        )
    }

    return (
        <div>
            {buildVisuals()}
            <DialogueBox id='dialogue' className={`dialogue-${currentScene.dialogue[dialoguePosition].type}`}>
            </DialogueBox>
        </div>
    );
}

export default VisualNovel;


