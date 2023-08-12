import { useState } from 'react';

export default function PlusIcon(props) { //setAction
    const [ color, setColor ] = useState('black');

    function handleOnMouseEnter() {
        setColor('white');
        props.setAction(prevent => 'Ajouter ?');
    };

    function handleOnMouseLeave() {
        setColor('black');
        props.setAction(prevent => '');
    };

    function handleOnClick() {
        props.setAddItem(prevent => true);
    };

    return (
        <svg 
            viewBox="0 0 448 512"
            width={20}
            onMouseEnter = {() => handleOnMouseEnter()}
            onMouseLeave = {() => handleOnMouseLeave()}
            onClick = {() => handleOnClick()}
            fill={color}
        >
            <path 
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
        </svg>
    )
}

