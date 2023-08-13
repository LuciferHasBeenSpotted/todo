import { useState } from 'react';

import AddList from './utils/AddList';
import List from './utils/List';

export default function Lists(props) {
    const [ lists, setLists ] = useState([]);//title: str, content: [str], id: int
    const [ inputActive, setInputActive ] = useState(false);
    const [ action, setAction ] = useState('');

    return (
        <div
            style = {{
                width: props.listsWidth,
                overflowY: 'scroll',
                textAlign: 'center'
            }}
        >

            <header>
                <h1 style={{textAlign: 'center'}}>Listes :</h1>
                <button
                    style = {{
                        backgroundColor: 'transparent',
                        padding: 5
                    }}
                    onClick = {() => setInputActive(true)}
                >Ajouter ?</button>
                {
                    inputActive ? 
                        <AddList 
                            setLists = {setLists}
                            lists = {lists}
                            setInputActive = {setInputActive}
                        />
                        : null
                }
                {
                    ...lists.map((list, i) => {
                        return(
                            <List 
                                key = {i} 
                               id = {i} 
                               {...list} 
                               lists = {lists}
                               setLists = {setLists} 
                               setAction = {setAction}
                               action = {action}
                            />
                        )
                    })
                }
            </header>
        </div>
    );
};