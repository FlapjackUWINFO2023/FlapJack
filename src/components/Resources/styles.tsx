import styled from 'styled-components';

export const ResourcesContainer = styled.div`
    background-color: #F2E0AA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 12px;

    div {
        text-align: left;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-direction: column;
        width: 50%;
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            width: 100%;
            background: rgb(247, 237, 225);    
        }
    }
`;

export const SectionTitle = styled.h1`
    color: #134254;
    font-weight: 700;
    font-size: 60px;
    line-height: 69px;
    margin: 0;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 36px;
    }
`;

export const SectionTitleLight = styled.h1`
    color: #134254;
    font-weight: 400;
    font-size: 60px;
    line-height: 69px;
    margin: 0;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ParagraphText = styled.p`
    font-size: 20px;
    margin: 0;
`;

export const VideosContainer = styled.div`
    padding: 40px;
    background: url('./imgs/video-bg.png');
    background-size: 100% 100%;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column-reverse;
    }
`;

export const VideoContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;

    div {
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            padding: 40px 12px;
            gap: 12px;
            width: 288px;
            height: 289px;
            background: rgb(247, 237, 225);
            flex: 0 0 auto;
            order: 1;
            align-self: stretch;
            -webkit-box-flex: 0;
        }
    }

    h2 {
        font-size: 48px;
        color: #134254;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            font-size: 30px;
        }
    }

    h3 {
        font-size: 36px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            font-size: 16px;
        }
    }

    iframe {
        height: 334px;
    }
`;

export const MoreVideosContainer = styled.div`
    padding: 40px;
    background: url('./imgs/videos-bg.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media screen and (min-width: 1301px) and (max-width: 1600px) {
        gap: 43px;
    }
    @media screen and (min-width: 1601px) and (max-width: 1850px) {
        gap: 61px;
     }

    .more-content {
        gap: 74px;
    }
`;

export const SimilarGamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        color: white;
    }
`;

export const GameCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: black;
        background-color: #F7EDE1;
        border-radius: 20px;
        padding: 24px;

         @media screen and (min-width: 1300px) and (max-width: 1500px) {
            display: flex;
            flex-direction: column;
            color: black;
            background-color: rgb(247, 237, 225);
            border-radius: 20px;
            padding: 24px;
            width: 368px;
        }

        @media screen and (min-width: 320px) and (max-width: 480px) {
            width: 323px;
            position: relative;
            left: -2px;
        }

        p {
            font-size: 20px;

            @media screen and (min-width: 320px) and (max-width: 480px) {
                font-size: 15px;
            }
        }

        img {
            width: 350px;
            height: 207px;

            @media screen and (min-width: 1300px) and (max-width: 1500px) {
                width: 300px;
            }

            @media screen and (min-width: 320px) and (max-width: 480px) {
                width: 247px;
            }
        }

        h3, p {
            margin: 0;
        }

        a {
            text-decoration: none;
        }

        button {
            width: 35%;
            background: #85C9E3;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 40px;
            border: none;
            padding: 16px 24px;
            font-size: 20px;

            @media screen and (min-width: 320px) and (max-width: 480px) {
                width: 247px;
            }

            @media screen and (min-width: 1300px) and (max-width: 1500px) {
                width: 60%;
            }
        }
    }
`;

export const DeepSea = styled.div`
    height: 350px;
    background: url('./imgs/deep-sea.png');
    background-size: 100% 100%;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        background-size: cover;
    }
`;