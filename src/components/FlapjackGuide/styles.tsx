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

export const User = styled.img<Props>`
`;

export const Background = styled.div`
    width: 100%;
`;

export const ExclamationMarks = styled.img`
    width: 10px;
`;

export const DialogueMessageContainer = styled.div`
    display: flex;
    align-items: center;

    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    max-width: 600px;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;

    color: #000000;

    @media screen and (min-width: 1301px) and (max-width: 1500px) {
        width: 65%;
        left: 43%;
        top: 33%;
        font-size: 30px;

        p {
            font-size: 25px;
            line-height: 25px;
            width: 100%;
            height: 220px;
            position: absolute;
            left: -160px;
        }
     }
`;

export const DialogueImg = styled.img`
    position: absolute;
    width: 50%;
    top: 140px;
    left: 100px;
    z-index: 1;
    transform: scaleY(-1) scaleX(-1); 
`;

