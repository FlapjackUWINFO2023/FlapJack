import React from "react";
import { useNavigate } from "react-router-dom";
import {
    IntroContainer,
    IntroBox,
    IntroText,
    IntroButton,
} from './styles.tsx';

function Intro() {
    const navigate = useNavigate();
    return (
        <IntroContainer>
            <IntroBox>
                <IntroText>
                    <h1>Welcome to Marine Rescue!</h1>
                    <h4>
                        You are going to be playing as a scuba diver and exploring the ocean! You will get to talk to different animals and learn about how debris in the ocean impact them.
                    </h4>
                </IntroText>
                <IntroButton onClick={() => navigate('/levels')}><h3>Start Playing!</h3></IntroButton>
            </IntroBox>
        </IntroContainer>
    );
}

export default Intro;