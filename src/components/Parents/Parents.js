import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    IntroContainer,
    IntroText,
    IntroTitle,
    IntroDescription,
    HelpContainer,
    Help,
    HelpText,
    HelpDescription,
    HelpVideoContainer,
    HelpVideo,
    LearnContainer,
    LearnText,
    LearnTitle,
    LearnDescription,
    CardsContainer,
    CardContainer,
    ResourceText,
} from './styles.tsx';

import {
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';
import { AboutSection } from '../About/styles.tsx';

function Parents() {
    const navigate = useNavigate();
    return (
        <>
            <IntroContainer>
                <IntroText>
                    <IntroTitle>What is Marine Rescue?</IntroTitle>
                    <IntroDescription>
                        Marine Rescue is a safe, secure, and private platform for elementary students to learn about debris' impacts on marine
                        wildlife through interactive stories and activities. Its a great way to get your child excited about science and nature!
                    </IntroDescription>
                </IntroText>
            </IntroContainer>

            <HelpContainer>
                <AboutSection className='presentation'>
                    <Help>
                        <HelpVideoContainer>
                            <HelpVideo src="https://www.youtube.com/embed/hnN8uOE6nTk" width='100%' height='500px' />
                        </HelpVideoContainer>
                        <HelpText>
                            <IntroTitle>How can I help my child play Marine Rescue?</IntroTitle>
                            <HelpDescription>
                                Kids will get to chat with multiple different sea animals, play mini games to help them learn the material, and watch short
                                videos to reinforce the content. You can support them as little or as much as you please. Pancake, the narrator, will help your
                                child through the game, functioning as a guide and an adventure buddy.
                            </HelpDescription>
                        </HelpText>
                    </Help>
                </AboutSection>
                <div></div>
                <LearnText>
                    <LearnTitle>What will my child learn using Marine Rescue?</LearnTitle>
                    <LearnDescription>
                        Marine Rescue is more than entertainment for you child. It will teach them about the ocean, the animals that live there,
                        and how they are affected by pollution.
                    </LearnDescription>
                </LearnText>

                <CardsContainer>
                    <CardContainer>
                        <img src='./imgs/marine-life.png' />
                        <div>
                            <h4>Marine Life</h4>
                            <p>
                                Your child will learn about local PNW marine life such as salmon, whales, and crabs. They will learn fun facts about the animals,
                                and about their experiences.
                            </p>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src='./imgs/trash.png' />
                        <div>
                            <h4>Marine Pollution</h4>
                            <p>
                                Your child will learn about how marine pollution such as ghost nets and trash impacts marine life. They will also learn how they
                                can help to clean up marine debris.
                            </p>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src='./imgs/vocabulary.png' />
                        <div>
                            <h4>Vocabulary</h4>
                            <p>
                                Your child will learn vocabulary words related to marine life and marine debris to help support their learning. They will also learn how
                                to pronounce the words.
                            </p>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src='./imgs/real-world-application.png' />
                        <div>
                            <h4>Real World Application</h4>
                            <p>
                                Your child will watch videos that connect what they are learning about regarding marine life and pollution to real life.
                            </p>
                        </div>
                    </CardContainer>
                </CardsContainer>
            </HelpContainer>

            <LearnContainer>
                <ResourceText>
                    <h2>Want to see information resources that helped us write the content for this game?</h2>
                    <button onClick={() => navigate('/resources')}>Visit the Resources Page</button>
                </ResourceText>
            </LearnContainer>
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
        </>

    );

}


export default Parents;
