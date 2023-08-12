import { useState } from 'react';

export default function AddItem(props) { //content: str, setContent: sf, setAddItem: sf, setLists: sf, id: 0-9
    function handleAddOnClick() {
        if(props.content === '') return;
        props.setAddItem(false);
        props.setLists(prevent => {
            return( 
                prevent.map((l, index) => {
                    if(index === props.id) {
                        const list = {title: l.title, content: [...l.content, props.content], id: index};
                        return list;
                    }
                    return l;
                })
            )  
        });
        props.setContent('');
    };
    
    return (
        <div>
            <input 
                value={props.content} 
                onChange = {(event) => props.setContent(event.target.value)}
            ></input>
            <button 
                style = {{
                    marginLeft: 25
                }}
                onClick = {() => handleAddOnClick()}
            >Ajouter ?</button>

            <button 
                style = {{
                    marginLeft: 25
                }}
                onClick = {() => props.setAddItem(false)}
            >Annuler ?</button>
        </div>
    )
}