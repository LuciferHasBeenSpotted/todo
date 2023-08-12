export default function AddNoteHeader(props) {//setInputActive: sf, notes: [], setNotes: sf, title: str, content: str
    function handleOnClick() {
        if(props.title === false) return;
        if(props.content === false) return;
        const note = {title : props.title, content: props.content, index: props.notes.length - 1};
        props.setNotes(prevent => [...prevent, note]);
        props.setInputActive(false);
    };

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
    );
};