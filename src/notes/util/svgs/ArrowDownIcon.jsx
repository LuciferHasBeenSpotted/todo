import { useState } from 'react';

export default function ArrowDownIcon(props) {
    const [ selected, setSelected ] = useState(false);

    function handleOnMouseEnter() {
        setSelected(true);
        props.setAction('Faire descendre ?');
    };

    function handleOnMouseLeave() {
        setSelected(false);
        props.setAction('');
    };

    function handleOnClick() {
        props.setNotes(prevent => {
            const old = {...prevent[props.index + 1]};
            prevent[props.index + 1] = {...props};
            prevent[props.index] = {...old};
            return prevent;
        })
    }

    return (
        <div
            onMouseEnter = {() => handleOnMouseEnter()}
            onMouseLeave = {() => handleOnMouseLeave()}
            onClick = {() => handleOnClick()}
        >
            <svg 
                width={15}
                viewBox="0 0 384 512"
                fill = {selected ? 'white' : 'black'}

            >
                <path 
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
            </svg>
        </div>
    );
};
