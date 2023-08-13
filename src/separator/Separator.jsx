import { useState, useEffect } from 'react';

export default function Separator(props) {
    const [followMouth, setFollowMouth ] = useState(false);
    const [ position, setPosition ] = useState(screen.width*0.495);

    useEffect(() => {
        props.setNotesWidth(`${position}px`);
        props.setListsWidth(`${screen.width - position}px`)
    }, [position])

    function drag(event) {
        if (!followMouth) return;
        setPosition(event.clientX);
    };

    return (
        <div onMouseMove={drag}>
            <div
                style={{
                    position: 'absolute',
                    width: '2%',
                    height: '100%',
                    border: '2px solid black',
                    borderRadius: 2,
                    left: position - screen.width*0.01
                }}
                onClick={() => setFollowMouth(prevent => !prevent)}
            ></div>
        </div>
    );
};
