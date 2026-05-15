import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LearnButton,
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';
import {
    LevelsContainer
} from './styles.tsx';

function Levels(props) {
    const { setQuestionNumber, setIsQuiz } = props
    const navigate = useNavigate();
    return (
        <LevelsContainer>
            <div className='preface'>
                <img src='./sprites/sprite-user-placeholder.png' alt='Sprite of user' />
                <div>
                    <p>
                        You’ll be playing as a scuba diver and exploring the ocean! As you explore different parts of the ocean,
                        you will get to talk to different animals and learn about how debris in the ocean impact them.
                    </p>
                </div>
            </div>
            <div className='level-one'>
                <div className='seagull'>
                    <div className='level-div col my-auto'>
                        <h2 className='first-title'>Level 1: Meet Shawn the Seagull</h2>
                        <p className='first-info'> Meet Shawn and learn about what Trash Islands are. Maybe you can even help clean up trash on the beach!
                        </p>
                        <LearnButton className="link-button" onClick={() => {
                            setQuestionNumber(3);
                            setIsQuiz(false);
                            navigate('/level1');
                        }}>Play</LearnButton>
                    </div>
                    <img src='./sprites/sprite-shawn-seagull.png' alt='Shawn the seagull' className='shawn-level' />
                </div>
                <div className='level-two'>
                    <div className='salmon'>
                        <img className='sally-level' src='./sprites/sprite-sally-salmon.png' alt="Sally the Salmon"></img>
                        <div className='level-divs col my-auto'>
                            <h2 className='first-title'>Level 2: Meet Sally the Salmon</h2>
                            <p className='first-info'> Meet Sally and learn about her experience of the Elwha. Maybe you can even help clean up ghosts nets and help out fish and other animals in the sea!
                            </p>
                            <LearnButton className="link-button" onClick={() => {
                                setQuestionNumber(1);
                                setIsQuiz(false);
                                navigate('/level2')
                            }}>Play</LearnButton>
                        </div>
                    </div>
                </div>
                <div className='level-three'>
                    <div className='whale'>
                        <div className='level-div col my-auto'>
                            <h2 className='first-title'>Level 3: Meet Wendy the Whale</h2>
                            <p className='first-info'> Meet Wendy and learn about the whale and the plastic that they eat. Maybe you can even help get rid of plastic inside the whale’s body!
                            </p>
                            <LearnButton className="link-button" onClick={() => {
                                setQuestionNumber(4);
                                setIsQuiz(false);
                                navigate('/level3');
                            }}>Play</LearnButton>
                        </div>
                        <img className='wendy-level' src='./sprites/sprite-wendy-whale.png' alt="Wendy the Whale"></img>
                    </div>
                </div>
            </div>
            <FooterContainer>
            <FooterText>
                    <p>Marine Rescue: The Sea-quel</p>
                    <span>Powered by Marlina's fruit snacks</span>
                </FooterText>
                <FooterCopyright>
                    <p>Copyright &copy; FlapJack</p>
                    <img src='./imgs/github.png' alt='Github logo' />
                </FooterCopyright>
                <img src='./imgs/iSchool-logo.png' alt='logo of the Information School at the University of Washington' />
            </FooterContainer>
        </LevelsContainer>
    );

}

export default Levels;