import { useState } from 'react'
import NoteEditHeader from './NoteEditHeader'

export default function NoteEdit(props) {//title: str, content: str, index: int, setNotes: sf, notes: [], action: str, setAction: sf, setIsEdited: sf
    const [ inputValue, setInputValue ] = useState(props.title);
    const [ contentValue, setContentValue ] = useState(props.content);

    function handleInputOnChange(e) {
        setInputValue(e.target.value);
    };
    function handleContentOnChange(e) {
        setContentValue(e.target.value);
    };

    return (
        <div>
            <NoteEditHeader 
                {...props} 
                inputValue = {inputValue} 
                contentValue = {contentValue}
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
                        border: 'none',
                        
                    }}
                    value={inputValue}
                    onChange={(e) => handleInputOnChange(e)}
                ></input>

                <textarea 
                    style = {{
                        backgroundColor: 'transparent',
                        flex: 1,
                        border: 'none'
                    }}
                    value={contentValue}
                    onChange={(e) => handleContentOnChange(e)}
                ></textarea>
        </div>
        </div>
    );
};