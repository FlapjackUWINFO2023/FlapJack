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

export const Fish = styled.img<Props>`
    position: relative;
`;

export const User = styled.img<Props>`
`;

export const Net = styled.img<Props>`
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

export const ScreenModal = styled.div`
    padding-top: 5vh
`;

export const ModalContent = styled.div`
    background-color: #C2EEFF;
`;

export const ModalRowText = styled.div`
    height: 0%;
    font-size: 25px
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

export const Trash = styled.img<Props>`
    position: relative;
    animation: MoveUpDown 1.5s linear infinite;
    width: 150px;

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-25px);
        }
    }

    :nth-child(7) {
        animation-delay: 200ms;
    }

    :nth-child(8) {
        animation-delay: 600ms;
    }

    :nth-child(6) {
        animation-delay: 900ms;
    }

    :nth-child(9) {
        animation-delay: 400ms;
    }
`;

export const Obstacle = styled.img<Props>`
    position: absolute;
    top: 40%;
    right: 45%;
    width: 300px;
`;

export const Whale = styled.img`
    right: 0%;
    top: 30%;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const PointsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    justify-content: flex-end;

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