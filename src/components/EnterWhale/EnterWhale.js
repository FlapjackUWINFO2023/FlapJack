import React, { useEffect, useRef, useState } from 'react';
import {
    User,
    Whale,
    Flapjack,
    TextBubble,
    Text
} from './styles.tsx';
import { useNavigate } from 'react-router-dom';

function EnterWhale(props) {
    const { isEnterWhale, setIsEnterWhale } = props;
    const [xAxis, setXAxis] = useState(60);
    const [yAxis, setYAxis] = useState(300);

    const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
    const navigate = useNavigate();

    const handleKeyDown = event => {
        const newPlayerCords = {
            xPosition: grabUserXPosition(),
            yPosition: grabUserYPosition(),
            width: user.current.width,
            height: user.current.height
        }
        if (event.key === 'ArrowRight') {
            newPlayerCords.xPosition += 100;
            if (!checkObstacle(newPlayerCords)) {
                setXAxis(xAxis + 50)
            }
        }
        if (event.key === 'ArrowLeft') {
            newPlayerCords.xPosition -= 100;
            if (!checkObstacle(newPlayerCords)) {
                setXAxis(xAxis - 50)
            }
        }
        if (event.key === 'ArrowDown') {
            newPlayerCords.yPosition += 50;
            if (!checkObstacle(newPlayerCords)) {
                setYAxis(yAxis + 50)
            }
        }
        if (event.key === 'ArrowUp') {
            newPlayerCords.yPosition -= 50;
            if (!checkObstacle(newPlayerCords)) {
                setYAxis(yAxis - 50)
            }
        }
        checkWhaleRange();
    };

    function grabUserXPosition() {
        return user.current.offsetLeft + (user.current.width / 2);
    }

    function grabUserYPosition() {
        return user.current.offsetTop + (user.current.height / 2)
    }

    const user = useRef(null);
    const whale = useRef(null);

    useEffect(() => {
        user.current.focus();
        whale.current.focus();
        setIsEnterWhale(true);
    }, [isEnterWhale]);

    function checkObstacle(newPlayerCords) {
        return false;
    }

    function checkWhaleRange() {
        if (Math.sqrt((grabUserXPosition() - whale.current.offsetLeft) ** 2 + (grabUserYPosition() - (whale.current.offsetTop + (whale.current.height / 2))) ** 2) <= 100) {
            document.getElementById('whale').classList.add('in-range');
        } else {
            document.getElementById('whale').classList.remove('in-range');
        }

        if (Math.sqrt((grabUserXPosition() - whale.current.offsetLeft) ** 2 + (grabUserYPosition() - (whale.current.offsetTop + (whale.current.height / 2))) ** 2) <= 150) {
            setIsEnterWhale(true);
            document.getElementById('whale-area').classList.add('entering-whale');
            navigate('/level3');
        }
    }

    return (
        <div id='whale-area' className='play-area' onClick={() => user.current.focus()}>
            {/* User */}
            <Flapjack src='/sprites/sprite-pancake-flapjack-octopus.png' />
            <TextBubble src='/sprites/misc-textbubble-left.png' />
            <Text>Swim into Wendy's mouth so that we can help her out!</Text>
            <Whale
                src={'/sprites/sprite-wendy-whale.png'}
                id={"whale"}
                ref={whale}
            />
            <User
                style={userPlacement}
                ref={user}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                src={`/sprites/sprite-user-placeholder.png`}
                id='playable'
                className='img-size'
                alt="User's character"
            />
        </div>
    );
}

export default EnterWhale;


