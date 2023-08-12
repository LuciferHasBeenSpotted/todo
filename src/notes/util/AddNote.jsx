import { useState } from 'react';
import AddNoteHeader from './AddNoteHeader';

export default function AddNote(props) { //setInputActive: sf, notes: [], setNotes: sf
    const [ title, setTitle ] = useState(false);
    const [ content, setContent ] = useState(false);
    
    return (
        <div
            style = {{
                width: '95%',
                height: '15vh',
                borderRadius: 15,
                border: '2px solid black',
                marginTop: 15,
                display: 'inline-block',
                color: 'white'
            }}
        >
            
            <AddNoteHeader 
                {...props}
                title={title} 
                content={content}
            />

            <div
                style = {{
                    padding: 15,
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}
            >
                <input
                    style = {{
                        backgroundColor: 'transparent',
                        marginBottom: 5,
                        border: 'none'
                    }}
                    placeholder='Titre de la note ?'
                    onChange={(e) => setTitle(e.target.value)}
                ></input>

                <textarea 
                    style = {{
                        backgroundColor: 'transparent',
                        flex: 1,
                        border: 'none'
                    }}
                    placeholder='Contenu de la note ?'
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
};
