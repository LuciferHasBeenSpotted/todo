import { useState } from 'react';

export default function ArrowUpIcon(props) {//setAction: sf, setLists: sf, title: str, content: str, index: int
    const [ selected, setSelected ] = useState(false);

    function handleOnMouseEnter() {
        setSelected(true);
        props.setAction('Faire monter ?');
    };

    function handleOnMouseLeave() {
        setSelected(false);
        props.setAction('');
    };

    function handleOnClick() {
        props.setLists(prevent => {
            return prevent.map(list => {
                const listBefore = {...prevent[props.index - 1], id: props.index};
                if(list.id === props.index - 1) {
                    return {title: props.title, content: [...props.content], id: list.id};
                }
                else if(list.id === props.index) return listBefore;
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
                viewBox ="0 0 384 512"
                width ={15}
                fill = {selected ? 'white' : 'black'}
            >
                <path 
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                />
            </svg>
        </div>
    );
};
