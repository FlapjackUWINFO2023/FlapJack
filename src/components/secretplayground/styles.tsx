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

export const Flapjack = styled.img<Props>`
    left: 10%;
    top: 30%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Whale = styled.img<Props>`
    right: 0%;
    top: 30%;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Speech = styled.img<Props>`
    left: 9%;
    top: 7%;
    transform: scaleX(-1);
    position: fixed;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
`;

export const Circle = styled.img<Props>`
    position: absolute;
    top: 40%;
    right: 45%;
    max-height: 300px
`;

export const Net = styled.img<Props>`
    top: 30%;
    left: 50%;
    position: relative;
`;