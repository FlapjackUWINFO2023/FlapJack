import React from 'react';
import {
    NavContainer,
    LogoContainer,
    ListContainer,
    ListItem,
    Link,
    PlayButton,
} from './styles.tsx';

function Navbar() {
    const handleClick = () => {
        const links = document.getElementById('list');
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
        }

        const linksDiv = document.querySelectorAll('#list div');
        linksDiv.forEach(n => n.addEventListener('click', closeMenu));

        const buttons = document.querySelectorAll('#list div a');
        buttons.forEach(n => n.addEventListener('click', closeMenu));
    };

    const closeMenu = () => {
        document.getElementById('list').style.display = 'none';
    }
    
    return (
        <nav>
            <NavContainer>
                <LogoContainer>
                    <Link to='/'>
                        <img src='./imgs/Marine_Rescue_The_Sea-quel.png' height={75} />
                        <div>
                            <h1>Marine Rescue</h1>
                            <h3>The Sea-quel</h3>
                        </div>
                    </Link>
                </LogoContainer>
                <ListContainer id='list'>
                    <ListItem>
                        <Link to='/resources'>
                            Resources
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/about'>
                            About
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/parents'>
                            Parents
                        </Link>
                    </ListItem>
                    <ListItem>
                        <PlayButton to='/levels'>
                            Play Now
                        </PlayButton>
                    </ListItem>
                </ListContainer>
                <button className='mobile-button' id='mobile' onClick={handleClick}>
                    <img src='./imgs/hamburger-menu.png' className='mobile-menu' />
                </button>
            </NavContainer>
        </nav>
    );
}

export default Navbar;