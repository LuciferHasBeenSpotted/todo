import { useState } from 'react';

export default function AddListHeader(props) {//setLists: sf, setInputActive: sf, title: str, content: [], lists: []
    function handleOnClick() {
        if(props.title === false) return;
        const list = {title: props.title, content: [], id: props.lists.length};
        props.setLists(prevent => [...prevent, list]);
        props.setInputActive(false);
    }

    return ( 
        <header
                style = {{
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'grey',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
                >
                <button onClick={() => handleOnClick()}>Ajouter ?</button>
                <button onClick={() => props.setInputActive(false)}>Annuler ?</button>
        </header>
    )
}