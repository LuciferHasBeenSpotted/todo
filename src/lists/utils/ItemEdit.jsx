import { useState } from 'react';

export default function ItemEdit(props) {
    const [ contentValue, setContentValue ] = useState(props.content)
    
    function handleEditOnClick() {
        if(contentValue == '') return;
        props.setLists(prevent => {
            return prevent.map(list => {
                if(list.id == props.listID) {
                    const newContent = list.content.map((c, i) => i == props.itemID ? contentValue : c);
                    const newItem = {title: list.title, content: [...newContent], id: list.id};
                    return newItem;
                };
                return list;
            });
        });
        props.setIsEdited(false);
    }

    return (
        <div>
            <input
                value = {contentValue}
                onChange = {event => setContentValue(event.target.value)}
            ></input>
            <button
                style = {{ marginLeft: 15 }}
                onClick = {() => handleEditOnClick()}
            >
                Modifier ?
            </button>
            <button
                style = {{ marginLeft: 15 }}
                onClick = {() => props.setIsEdited(false)}
            >
                Annuler ?
            </button>
        </div>
    )
}