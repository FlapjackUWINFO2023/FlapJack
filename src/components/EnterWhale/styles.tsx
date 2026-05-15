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

export const Whale = styled.img<Props>`
    right: 0%;
    top: 20%;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Flapjack = styled.img`
    left: 150px;
    top: 200px;
    position: absolute;
    width: 150px;
`;

export const TextBubble = styled.img`
    left: 180px;
    top: 10px;
    position: absolute;
    width: 35%;
    transform: scaleY(-1); 
`;

export const Text = styled.p`
    left: 240px;
    top: 50px;
    position: absolute;
    width: 30%;
    font-size: 30px;
`;