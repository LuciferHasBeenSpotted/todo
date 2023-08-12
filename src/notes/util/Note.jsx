import { useState } from 'react';

import NoteHeader from './NoteHeader';
import NoteContent from './NoteContent';
import NoteEdit from './NoteEdit';

export default function Note(props) { //title: str, content: str, index: int, setNotes: sf, notes: [], action: str, setAction: sf
    const [ selected, setSelected ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);

    function handeOnMouseEnter() {
        setSelected(true);
    };

    return (
        <div
            style = {{
                width: '95%',
                height: '15vh',
                borderRadius: 15,
                border: '2px solid black',
                marginTop: 15,
                display: 'inline-block'
            }}
            onMouseEnter={() => handeOnMouseEnter()}
            onMouseLeave={() => setSelected(false)}

        >
            {isEdited ? 
                <NoteEdit {...props} setIsEdited={setIsEdited}/>
                :   <div>
                        {
                            selected ?
                            <NoteHeader {...props} setIsEdited={setIsEdited}/>
                            : null 
                        }
                        <NoteContent>
                            {props.content}
                        </NoteContent>
                    </div> 
                  
            }
        </div>
    );
};