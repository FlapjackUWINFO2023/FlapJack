import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HomeContainer,
    IntroContainer,
    IntroText,
    IntroTitle,
    IntroDescription,
    MoreInfo,
    IntroButton,
    ParentButton,
    IntroSprites,
    MeetContainer,
    MeetTitle,
    MeetSprites,
    LearnContainer,
    LearnText,
    LearnTitle,
    LearnDescription,
    LearnButton,
    FooterContainer,
    FooterText,
    FooterCopyright,
    ShawnSprite,
    TextBubble,
    SallySprite,
    PancakeSprite,
    WendySprite,
    NormalSprite,
    Notification,
} from './styles.tsx';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const animation = document.querySelectorAll('.animation');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation');
                }
                else {
                    entry.target.classList.remove('scroll-animation');
                }
            })
        },
            {
                threshold: 0.5
            });
        for (let i = 0; i < animation.length; i++) {
            const elements = animation[i];

            observer.observe(elements);
        }
    }, []);

    return (
        <HomeContainer>
            <IntroContainer>
                <Notification>
                    <h4>Notice</h4>
                    <p>This project will be transitioned to open source, effective Jun. 10th, 2023.</p>
                </Notification>
                <IntroText>
                    <IntroTitle>Welcome to Marine Rescue!</IntroTitle>
                    <IntroDescription>
                        Marine Rescue is a fun way to learn about problems that hurt marine animals like pollution and ghost nets.
                        You get to play as a scuba diver and explore the underwater world while learning about the animals who live
                        there and the dangers they face. You can help make a difference by learning about the problems and ways to
                        solve them. Join in and have fun while helping to protect our oceans!
                    </IntroDescription>
                    <MoreInfo>
                        <IntroButton onClick={() => navigate('/levels')}>Play Now!</IntroButton>
                        <ParentButton onClick={() => navigate('/parents')}>
                            <div>
                                <p>Are you a Parent?</p>
                                <p>Learn More About the Game</p>
                            </div>
                            <img src='./imgs/arrow_forward_ios.png' />
                        </ParentButton>
                    </MoreInfo>
                </IntroText>
                <img className='official-logo' src='./imgs/Marine_Rescue_The_Sea-quel_Logo.png' alt='Marine Rescue: The Sea-quel logo' />
            </IntroContainer>

            <MeetContainer>
                <MeetTitle>Meet New Friends!</MeetTitle>
                <MeetSprites>
                    <ShawnSprite>
                        <TextBubble className='animation-right animation'>
                            <img src='./sprites/sprite-text-bubble.png' alt='text bubble' />
                            <h4>Hey! I'm Shawn the Seagull</h4>
                        </TextBubble>
                        <div className='sprite-container'>
                            <img src='./sprites/sprite-shawn-seagull.png' alt='Shawn the Seagull' className='sprite-image' />
                        </div>
                    </ShawnSprite>
                    <SallySprite>
                        <div className='sprite-container'>
                            <img src='./sprites/sprite-sally-salmon.png' alt='Sally the Salmon' className='sprite-image' />
                        </div>
                        <TextBubble className='animation-left animation'>
                            <img src='./sprites/sprite-text-bubble.png' alt='text bubble' className='text-bubble' />
                            <h4>Hello! I'm Sally the Salmon</h4>
                        </TextBubble>
                    </SallySprite>
                    <NormalSprite>
                        <img src='./sprites/sprite-fish-extra1.png' alt='Extra fish 1' className='right-fish sprite-normal' />
                    </NormalSprite>
                    <PancakeSprite>
                        <TextBubble className='animation-right animation'>
                            <img src='./sprites/sprite-text-bubble.png' alt='text bubble' />
                            <h4>Hi! I'm Pancake the Flapjack Octopus</h4>
                        </TextBubble>
                        <img src='./sprites/sprite-pancake-flapjack-octopus.png' alt='Pancake the Flapjack Octopus' className='sprite-image sprite-normal' />
                    </PancakeSprite>
                    <NormalSprite>
                        <img src='./sprites/sprite-fish-extra2.png' alt='Extra fish 1' className='left-fish sprite-normal' />
                    </NormalSprite>
                    <WendySprite className='wendy-container'>
                        <div className='sprite-container'>
                            <img src='./sprites/sprite-wendy-whale.png' alt='Wendy the Whale' className='sprite-image' />
                        </div>
                        <TextBubble className='animation-left animation'>
                            <img src='./sprites/sprite-text-bubble.png' alt='text bubble' className='text-bubble' />
                            <h4>Heya! I'm Wendy the Whale</h4>
                        </TextBubble>
                    </WendySprite>
                </MeetSprites>
            </MeetContainer>

            <LearnContainer>
                <LearnText>
                    <LearnTitle>Are you a Marine Rescuer parent?</LearnTitle>
                    <LearnDescription>
                        Learn more about how Marine Rescue can benefit your child’s scientific education & help them connect to nature in the Pacific Northwest.
                    </LearnDescription>
                    <LearnButton onClick={() => navigate('/parents')}>Learn More</LearnButton>
                </LearnText>
                <IntroSprites className='intro-sprites'>
                    <img src='./sprites/sprite-pancake-flapjack-octopus.png' alt='sprite of Pancake, the flapjack octopus' className='pancake-home sprite-normal' />
                    <img src='./sprites/sprite-user-placeholder.png' alt='sprite of the user' className='user sprite-normal' />
                </IntroSprites>
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
        </HomeContainer>
    );
}

export default Home;