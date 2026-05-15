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

export const Flapjack = styled.img<Props>`
    left: 10%;
    top: 30%;
    position: fixed;
    max-height: 92.86px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ScreenModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px
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
