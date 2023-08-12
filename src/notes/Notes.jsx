import { useState } from 'react';

import Note from './util/Note';
import AddNote from './util/AddNote';

export default function Notes() {
    const [ action, setAction ] = useState('');
    const [ inputActive, setInputActive ] = useState(false);
    const [ notes, setNotes ] = useState([]);
    return (
        <div
            style={{
                width: '49.5%',
                overflowY: 'scroll',
                textAlign: 'center'
            }}
        >
            <header>
                <h1 style={{textAlign: 'center'}}>Notes :</h1>
                <button
                    style = {{
                        backgroundColor: 'transparent',
                        padding: 5
                    }}
                    onClick = {() => setInputActive(true)}
                >Ajouter ?</button>
            </header>
            {
                inputActive ? 
                    <AddNote 
                        setInputActive={setInputActive} 
                        notes={notes} 
                        setNotes={setNotes}
                    />
                    : null}
            {
                notes.map((e, i) =>{
                    return (
                        <Note 
                            {...e} //title, content, index
                            key = {i} 
                            notes = {notes}
                            setNotes = {setNotes}
                            action = {action} 
                            setAction = {setAction}
                            index = {i}
                        />
                    );
                })
            }
        </div>
    );
};
