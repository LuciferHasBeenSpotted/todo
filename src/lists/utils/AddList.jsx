import { useState } from 'react';

import AddListHeader from './AddListHeader';

export default function AddList(props) { //setLists: sf, setInputActive: sf, lists: []
    const [ title, setTitle ] = useState('');
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
        >
            <AddListHeader {...props} title={title} content={[]}/>
            <input
                style = {{
                    backgroundColor: 'transparent',
                    marginBottom: 5,
                    border: 'none'
                }}
                placeholder='Titre de la liste ?'
                onChange={(e) => setTitle(e.target.value)}
            >
            </input>
        </div>
    )
}