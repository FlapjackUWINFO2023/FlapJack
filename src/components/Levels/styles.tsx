import styled from 'styled-components';

export const HomeContainer = styled.div`

`;

export const IntroContainer = styled.div`
    background-color: #85C9E3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
    width: 100%;
    height: 91vh;
    font-family: 'Mulish';
`;

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
`;

export const IntroTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: black;
    width: 100%;
    height: 60px;
`;

export const IntroDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
`;

export const IntroButton = styled.button`
    width: 220px;
    padding: 16px 24px;
    background-color: #134254;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;

    font-size: 30px;
    color: white;
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
    padding: 40px;
    gap: 46px;

    width: 100%;
    height: 60vh;

    background-color: #1E7FA4;
    font-family: 'Mulish';
`;

export const MeetTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: white;
    width: 100%;
    height: 60px;
`;

export const MeetSprites = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap 223px;

    width: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

    background: #85C9E3;
    font-family: 'Mulish';
`;

export const LevelsContainer = styled.div`
    overflow-x: hidden;
`;

export const LearnText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 10px;
    width: 50%;
`;

export const LearnTitle = styled.h2`
    width: 100%;
    font-weight: 400;
    font-size: 48px;
    line-height: 60px;
    color: black;
`;

export const LearnDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: black;
`;

export const LearnButton = styled.button`
    width: 240px;
    padding: 16px 24px;

    background: #134254;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;

    color: white;
    font-size: 30px;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 15px;
    border-top: 1px solid white;
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