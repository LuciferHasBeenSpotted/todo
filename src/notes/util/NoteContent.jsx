import React from 'react';

export default function NoteContent(props) {
    return (
        <div
            style = {{
                width: '1OO%',
                height: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15
            }}
        >
            {props.children}
        </div>
    );
};
