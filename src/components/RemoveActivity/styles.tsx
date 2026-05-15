import styled from 'styled-components';

interface Props {
    style?: object;
    ref: any;
    tabIndex?: number;
    onKeyDown?: any;
    src: string;
    id?: string;
    className: string;
    alt: string;
}

export const PointsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    justify-content: flex-end;
    position: absolute;
    right: 0;

    div {
        background-color: lightgrey;
        color: black;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Mulish';
        border-radius: 4px;
        opacity: 0.8;
        display: flex;
        align-items: center;
        padding: 14px 18px;

        P {
            margin: 0;
        }
    }
`;

export const Trash = styled.img<Props>`
    position: relative;
    animation: MoveUpDown 1s linear infinite;
    
    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-25px);
        }
    }

    :nth-child(3) {
        animation-delay: 300ms;
    }

    :nth-child(4) {
        animation-delay: 500ms;
    }

    :nth-child(5) {
        animation-delay: 100ms;
    }
`;


export const Flapjack = styled.img<Props>`
    left: 10%;
    top: 30%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ScreenModal = styled.div`
    padding-top: 5vh
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
`;

export const ModalContent = styled.div`
    background-color: #C2EEFF;
`;

export const ModalRowText = styled.div`
    height: 0%;
    font-size: 25px
`;

export const ChoiceButton = styled.button`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 24px;
    gap: 10px;
    width: 73px;
    height: 77px;
    /* Dark Navy */
    background: #134254;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const ChoiceImages = styled.img`
    height: 100px !important
`;

export const NextButton = styled.button`
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

export const StartButton = styled.button`
    padding: 12px 24px;
    border: none;
    background: #134254;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
`;

export const Background = styled.div`
    width: 100%;
    background-image: url('./sprites/bg-beach-level.png');
    background-size: 100% 100%;
    overflow: hidden;
    height: 100vh;
`;

export const User = styled.img<Props>`
    position: absolute;
    width: 150px;
`;