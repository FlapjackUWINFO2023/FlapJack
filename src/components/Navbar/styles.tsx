import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .mobile-button {
        display: none;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        max-width: 480px;
        margin: auto;
        position: relative;

        .mobile-button {
            display: block;
            background: transparent;
            border: none;
        }
    }
`;

export const LogoContainer = styled.div`
    a {
        text-decoration: none;
        padding: 14px 16px;
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        font-family: 'Inter', sans-serif;
    }

    h1 {
        color: black;
        font-weight: 700;
        font-size: 30px;
        margin: 0;
    }

    h3 {
        color: #284775;
        font-size: 20px;
        margin: 0;
        font-weight: 400;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 100px;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        display: none;
        position: fixed;
        z-index: 2;
        top: 100px;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 0 0 10px 10px;
        align-items: flex-start;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding-bottom: 20px;

        a {
            position: inherit;
            margin: 0;
            width: 100%;
        }
    }
`;

export const ListItem = styled.div`
    margin-left: 40px;
`;

export const Link = styled(NavLink)`
    color: black;
    font-weight: bold;
    display: block;
    text-decoration: none;
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    font-family: Mulish;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        left: 0;
        top: 0;
    }
`;

export const PlayButton = styled(NavLink)`
    background-color: #284775;
    border-radius: 20px;
    color: white;
    font-family: Mulish;
    font-weight: bold;
    display: block;
    text-decoration: none;
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    margin-right: 20px;
`;