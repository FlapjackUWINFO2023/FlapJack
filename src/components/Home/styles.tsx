import styled from 'styled-components';

export const HomeContainer = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    @media (max-width: 480px) {
        overflow: hidden;
    }
`;

export const IntroContainer = styled.div`
    background: url('./imgs/intro-bg-home.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 300px;
    align-items: center;
    padding: 80px 40px;
    width: 100%;
    height: 91vh;
    font-family: 'Mulish';

    .official-logo {
        width: 400px;
    }

    @media (max-width: 480px) {
        background-size: cover;
        gap: 20px;
        flex-direction: column;
        padding: 40px 20px;
        .official-logo {
            position: absolute;
            width: 100px;
            top: 275px;
            right: 10px;
        }
    }
`;

export const Notification = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 300px;
    position: absolute;
    top: 150px;
    right: 50px;
    padding: 24px;

    h4 {
        font-weight: 600;
    }

    p {
        margin-bottom: 0;
    }

    @media (max-width: 480px) {
        position: inherit;
        width: 100%;
    }
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    background-color: #f7ede1;
    border-radius: 20px;
    padding: 24px;

    @media (max-width: 480px) {
        align-items: center;
        width: 100%;
        gap: 0;
    }
`;

export const IntroTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #134254;
    width: 100%;
    height: 60px;

    @media (max-width: 480px) {
        font-size: 28px;
        line-height: 28px;
        margin: 0;
        margin-bottom: 10px;
    }
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin-bottom: 30px;

    a {
        color: black;
        text-decoration: underline;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 30px;
    }
`;

export const MoreInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 480px) {
        width: 237px;
        height: 121px;
        flex-direction: column;
        align-items: center;
        padding: 0;
        line-height: 20px;
        gap: 10px;
    }
`;

export const ParentButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    color: #134254;
    font-size: 20px;
    cursor: pointer;

    div p {
        margin: 0;
        margin-right: 10px;
    }

    div p:nth-child(2) {
        text-decoration: underline;
    }

    img {
        width: 24px;
    }

    @media (max-width: 480px) {
        padding: 0;
        gap: 10px;
        font-size: 16px;

        p {
            
        }
    }
`;

export const IntroButton = styled.button`
    width: 220px;
    padding: 16px 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    background-color: #85c9e3;

    font-size: 36px;
    color: #134254;
    border: none;

    @media (max-width: 480px) {
        width: 133px;
        height: 55px;
        font-size: 16px;
    }
`;

export const IntroSprites = styled.div`
    height: 300px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .pancake {
        width: 200px;
    }

    .user {
        width: 500px;
    }
`;

export const MeetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 20px;
    gap: 46px;

    width: 100%;
    height: 1601px;

    background: url('./imgs/meet-bg.png');
    font-family: 'Mulish';
`;

export const MeetTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #134254;
    width: 100%;
    height: 60px;

    @media (max-width: 480px) {
        background-color: #f7ede1;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 24px;
        font-size: 28px;
        line-height: 28px;
        margin: 0;
    }
`;

export const MeetSprites = styled.div`
    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

    img {
        width: 100%;
    }

    .animation-left {
        opacity: 0;
        transform: translateX(-300px);
        transition: all 0.7s ease-out;
        transition-delay: 0.4s;
    }

    .animation-right {
        opacity: 0;
        transform: translateX(200px);
        transition: all 0.7s ease-out;
        transition-delay: 0.2s;
    }

    .scroll-animation {
        opacity: 1;
        transform: translateX(0);
    }

    .sprite-container {
        :nth-child(1) {
            animation-delay: 300ms;
        }
    
        :nth-child(2) {
            animation-delay: 500ms;
        }
    
        :nth-child(3) {
            animation-delay: 100ms;
        }
    }

    .right-fish {
        animation-delay: 700ms;
    }

    .left-fish {
        animation-delay: 1200ms;
    }

    .sprite-normal {
        :nth-child(2) {
            animation-delay: 900ms;
        }
    }

    @media (max-width: 480px) {
        .animation-right {
            transform: translateX(0px);
        }
        
        .wendy-container .animation-left {
            transform: translateX(150px);
        }
    }
`;

export const TextBubble = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 40px;
    isolation: isolate;
    width: 337px;
    height: 215.35px;

    img {
        width: 337px;
        height: 175.35px;
    }

    h4 {
        position: absolute;
        font-family: 'Mulish';
        width: 261px;
        height: 92px;
        left: 21px;
        top: 25px;
        font-size: 36px;
        line-height: 41px;
        text-align: center;
        color: black;
        order: 1;
        z-index: 1;
    }

    @media (max-width: 480px) {
        width: 237px;
        height: 115px;

        img {
            width: 237px;
            height: 175px;
        }

        h4 {
            font-size: 20px;
            width: 150px;
            left: 30px;
            top: 35px;
            line-height: 28px;
        }
    }
`;

export const ShawnSprite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    gap: 4px;

    position: absolute;
    width: 505px;
    height: 215.35px;
    left: 60%;
    top: 15px;

    .sprite-image {
        width: 164px;
        height: 141px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    @media (max-width: 480px) {
        left: 0;
        .sprite-image {
            width: 123px;
            height: 100px;
        }
    }
`;

export const SallySprite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    gap: 4px;

    position: absolute;
    width: 540px;
    height: 195.35px;
    left: 10%;
    top: 343px;

    .sprite-image {
        width: 199px;
        height: 119.53px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .text-bubble {
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    h4 {
        position: absolute;
        font-family: 'Mulish';
        width: 261px;
        height: 92px;
        left: 53px;
        top: 45px;
        font-size: 36px;
        line-height: 41px;
        text-align: center;
        color: black;
        order: 1;
        z-index: 1;
    }

    @media (max-width: 480px) {
        left: 0;
        top: 250px;
        .sprite-image {
            width: 150px;
            height: 90px;
        }

        .sprite-container {
            width: auto;
        }

        h4 {
            font-size: 20px;
            width: 150px;
            top: 35px;
            line-height: 28px;
        }

        .text-bubble {
            width: 237px;
            height: 175px;
        }
    }
`;

export const PancakeSprite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    gap: 4px;

    position: absolute;
    width: 471.75px;
    height: 200px;
    left: 70%;
    top: 616px;

    .sprite-image {
        width: 130.75px;
        height: 80px;
    }

    h4 {
        position: absolute;
        font-family: 'Mulish';
        width: 261px;
        height: 92px;
        left: 25px;
        top: 32px;
        font-size: 36px;
        line-height: 41px;
        text-align: center;
        color: black;
        order: 1;
        z-index: 1;
    }

    @media (max-width: 480px) {
        left: 0;
        top: 580px;
        .sprite-image {
            width: 75px;
            height: 45px;
        }

        .sprite-container {
            width: auto;
        }

        h4 {
            font-size: 20px;
            width: 150px;
            left: 31px;
            top: 25px;
            line-height: 28px;
        }

        .text-bubble {
            width: 237px;
            height: 175px;
        }
    }
`;

export const WendySprite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 4px;

    position: absolute;
    width: 1500px;
    top: 949px;

    .sprite-image {
        width: 1200px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .text-bubble {
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    h4 {
        position: absolute;
        font-family: 'Mulish';
        width: 261px;
        height: 92px;
        left: 50px;
        top: 30px;
        font-size: 36px;
        line-height: 41px;
        text-align: center;
        color: black;
        order: 1;
        z-index: 1;
    }

    @media (max-width: 480px) {
        left: 0;
        top: 1100px;
        .sprite-image {
            position: absolute;
            width: 400px;
            left: -220px;
        }

        .sprite-container {
            width: auto;
        }

        h4 {
            font-size: 20px;
            width: 150px;
            left: 55px;
            top: 21px;
            line-height: 28px;
        }

        .text-bubble {
            width: 237px;
            height: 175px;
        }
    }
`;

export const NormalSprite = styled.div`
    .right-fish {
        position: absolute;
        width: 153px;
        height: 64px;
        left: 1072px;
        top: 474px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
    
    .left-fish {
        position: absolute;
        width: 149px;
        height: 84px;
        left: 500px;
        top: 791px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    @media (max-width: 480px) {
        .right-fish {
            left: 140px;
            top: 530px;
        }

        .left-fish {
            left: 30px;
            top: 920px;
        }
    }
`;

export const MeetAnimal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 20px;
    text-align: center;

    width: 33%;

    img {
        width: 350px;
    }

    .sally {
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    h4 {
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: white;
    }
`;

export const LearnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;

    width: 100%;
    height: 70vh;

    background: url('./imgs/learn-bg.png');
    background-size: 100% 100%;
    font-family: 'Mulish';

    @media (max-width: 480px) {
        background-size: cover;
        padding: 40px 20px;
        .intro-sprites {
            display: none;
        }
    }
`;

export const LearnText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 10px;
    width: 50%;
    
    @media (max-width: 480px) {
        background-color: #f7ede1;
        border-radius: 20px;
        padding: 24px;
        width: 100%;
        gap: 0;
    }
`;

export const LearnTitle = styled.h2`
    width: 100%;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: white;

    @media (max-width: 480px) {
        color: #134254;
        font-size: 28px;
        line-height: 28px;
        margin: 0;
        margin-bottom: 20px;
    }
`;

export const LearnDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;

    @media (max-width: 480px) {
        color: #134254;
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 30px;
    }
`;

export const LearnButton = styled.button`
    width: 240px;
    padding: 16px 24px;
    font-size: 36px;

    background: #85C9E3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    border: none;

    color: #134254;
    font-size: 30px;

    @media (max-width: 480px) {
        width: 133px;
        height: 55px;
        font-size: 16px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 15px;
    width: 100%;
    height: 15vh;
    background: #F2E0AA;
    font-family: 'Mulish';

    @media (max-width: 480px) {
        padding: 20px;
        flex-direction: column;
        height: 15vh;
        gap: 0;

        img {
            width: 200px;
        }
    }
`;

export const FooterText = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0;

    p {
        margin: 0;
    }

    span {
        font-weight: normal;
        font-style: italic;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
        width: 100%;
        align-items: center;

        span {
            font-size: 12px;
        }
    }
`;

export const FooterCopyright = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        margin-right: 10px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-bottom: 8px;

        img {
            width: 20px;
        }
    }
`;