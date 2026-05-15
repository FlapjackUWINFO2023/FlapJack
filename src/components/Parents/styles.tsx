import styled from 'styled-components';

export const IntroContainer = styled.div`
    background: url('./imgs/intro-bg.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    width: 100%;
    height: 91vh;
    font-family: 'Mulish';
    padding-bottom: 0;
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #F7EDE1;
    padding: 24px;
    border-radius: 20px;
    width: 40%;
    margin-left: 100px;
    margin-bottom: 300px;
`;

export const IntroTitle = styled.h2`
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    color: #134254;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;

    @media screen and (min-width: 1100px) and (max-width: 1500px) {
        font-size: 36px;
    }
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
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

export const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    padding-top: 0;
    padding-bottom: 36px;

    width: 100%;
    height: 1600px;

    background: url('./imgs/parent-meet-bg.png');
    font-family: 'Mulish';
`;

export const Help = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HelpText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 40%;
    margin-right: 100px;
    background-color: #F7EDE1;
    padding: 24px;
    border-radius: 20px;

    @media screen and (min-width: 1100px) and (max-width: 1500px) {
        width: 50%;
    }
`;

export const HelpDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
    margin: 0;
    margin-top: 35px;
`;

export const HelpVideoContainer = styled.div`
    width: 60%;
    height: 120%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-right: 100px;
    margin-left: 100px;
    display: flex;
    align-items: center;
`;

export const HelpVideo = styled.iframe`
`;

export const LearnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    padding: 40px;
    padding-top: 0;
    gap: 46px;

    width: 100%;
    height: 510px;

    background: url('./imgs/parent-learn-bg.png');
    background-size: 100% 100%;
    font-family: 'Mulish';
`;

export const LearnText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 74px;
`;

export const LearnTitle = styled.h2`
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    color: white;
    width: 100%;
    height: 60px;
    margin: 0;
`;

export const LearnDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 36px;
    width: 100%;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    width: 100%;
    gap: 20px;

    img {
        width: 150px;
    }

    h4 {
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: white;
        margin: 20px;
    }

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: white;
        margin: 20px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 15px;
    border-top: 2px solid white;

    width: 100%;
    height: 15vh;
    background: #1E7FA4;
    font-family: 'Mulish';
`;

export const FooterText = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: white;
    margin: 0;
`;

export const FooterCopyright = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
    margin: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        margin-right: 10px;
    }
`;

export const ResourceText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    gap: 24px;
    background-color: #F7EDE1;
    padding: 24px;
    border-radius: 20px;

    h2 {
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        color: rgb(19, 66, 84);
        width: 100%;
        margin-bottom: 10px;
    }

    button {
        padding: 16px 24px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        background-color: #85c9e3;

        font-size: 36px;
        color: #134254;
        border: none;
    }
`;