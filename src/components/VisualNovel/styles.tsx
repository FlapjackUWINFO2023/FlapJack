import styled, { css } from 'styled-components';

interface ContainerProps {
    backgroundImage: string,
}

export const VisualNovelContainer = styled.div<ContainerProps>`
    height: 100vh;
    background-size: contain;
    overflow: hidden;
    background-image: ${(props) => props.backgroundImage};
    background-size: 100% 100%;

    .dialogue-left .textBox {
        transform: scaleX(-1);
    }

    @media screen and (min-width: 1400px) and (max-width: 1500px) {
        background-size: cover;
    }
`;

export const ExitButton = styled.button`
    position: absolute;
    margin: 20px;
    top: 0;
    right: 0;
    
    padding: 12px 24px;
    
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background: #FFFFFF;
    border-radius: 20px;
    z-index: 1;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
`;

export const NextButton = styled.button`
    position: absolute;
    margin: 20px;
    bottom: 0;
    right: 0;
    
    padding: 12px 24px;
    
    border: none;
    background: #FFFFFF;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
`;

export const BackButton = styled.button`
    position: absolute;
    margin: 20px;
    bottom: 0;
    left: 0;

    padding: 12px 24px;

    border: none;
    background: #FFFFFF;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
`;

export const DialogueBox = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-family: 'Mulish';
    font-size: 36px;
`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 80%;
    bottom: 30px;
    left: 150px;
    z-index: 1;
`;

export const DialogueMessageContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: 2;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    color: #000000;
    z-index: 1;

    @media screen and (min-width: 1400px) and (max-width: 1500px) {
        font-size: 28px;
        top: 83%;
        left: 48%;
    }
`;

export const SpeakerContainer = styled.div`
    position: absolute;
    top: calc(100% - 300px);
    left: 250px;
    font-family: 'Mulish';
    font-size: 36px;
    text-decoration: underline;
    z-index: 2;

    span {
        display: block;
        padding: 8px 16px;
        border-radius: 16px;
    }

    p {
        white-space: pre-wrap;
    }
`;

export const IntroContainer = styled.div`
    background: url('/sprites/bg-mid-sea.png');
    height: 100vh;
    overflow: hidden;
`;

export const IntroBox = styled.div`
    box-sizing: border-box;
    border: 10px solid black;
    background-color: #F7EDE1;
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 56px;
    align-items: center;
    gap: 40px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
        color: black;
    }
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
`;

export const IntroButton = styled.button`
    padding: 16px 24px;
    background: #134254;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
    }
`;

export const TermContainer = styled.div`
    display: block;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;