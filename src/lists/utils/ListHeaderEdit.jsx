export default function ListHeaderEdit(props) {
    function handleOnClick() {
        if(props.inputContent == '') return;
        props.setIsEdited(false);
        return props.setLists(prevent => {
            return prevent.map(list => {
                if(list.id === props.id) return {...list, title: props.inputContent}
                return list;
            });
        });
    };

    return (
        <div
            style = {{
                width: '100%',
                display: 'flex'
            }}
        >
            <input
                value={props.inputContent}
                onChange = {event => props.setInputContent(event.target.value)}
                style = {{marginLeft: 15}}
            ></input>

            <button
                style = {{
                    marginLeft: 15
                }}
                onClick = {() => handleOnClick()}
            >
                Modifier ?
            </button>

            <button
                style = {{
                    marginLeft: 15
                }}
                onClick = {() => props.setIsEdited(false)} 
            >
                Annuler ?
            </button>
        
        </div>
    )
}