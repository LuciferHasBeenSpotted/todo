import React from 'react';

export default function NoteEditHeader(props) {//title: str, content: str, index: int, setNotes: sf, notes: [], action: str, setAction: sf, inputValue: str, contentValue: str
    function handleEditOnClick() {
        props.setNotes(prevent => {
            return prevent.map((p, i) => {
                return i == props.index ? 
                    {
                        ...p, 
                        title: props.inputValue,
                        content: props.contentValue
                    } : p
            });
        });
        props.setIsEdited(false);
    };
    function handleCancelOnChange() {
        props.setIsEdited(false);
    };

    return (
        <header
            style = {{
                width: '100%',
                height: '20%',
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <button
                onClick = {() => handleEditOnClick()}
            >Modifier ?</button>
            
            <button
                onClick = {() => handleCancelOnChange()}
            >Annuler ?</button>
        </header>
    );
};