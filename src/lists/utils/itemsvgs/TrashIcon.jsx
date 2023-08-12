import { useState } from 'react';

export default function TrashIcon(props) { //setAction: sf, setLists: sf, listID: int, itemID: int
    const [ selected, setSelected ] = useState(false);

    function handleOnMouseEnter() {
        setSelected(true);
        props.setAction('Supprimer ?');
    };

    function handleOnMouseLeave() {
        setSelected(false);
        props.setAction('');
    };

    function handleOnClick() {
        props.setLists(prevent => {
            return prevent.map((list, index) => {
                if(list.id == props.listID) {
                    const newContent = list.content.filter((c, i) => i != props.itemID)
                    const newItem = {title: list.title, content: newContent, id: index}
                    return newItem;
                }
                return list;
            });
        });
    };

    return (
        <div
            onMouseEnter = {() => handleOnMouseEnter()}
            onMouseLeave = {() => handleOnMouseLeave()}
            onClick = {() => handleOnClick()}
        >
            <svg 
                viewBox="0 0 448 512"
                width={10}
                fill = {selected ? 'white' : 'black'}

            >
                <path 
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
            </svg>
        </div>
    );
};
