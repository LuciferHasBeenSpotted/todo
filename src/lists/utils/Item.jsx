import { useState } from 'react';
import ItemMain from './ItemMain';
import ItemEdit from './ItemEdit';

export default function Item(props) {//content: str, listID: int, itemID: int, setAction: sf, numberOfItem: int
    const [ selected, setSelected ] = useState(false);
    const [ isEdited, setIsEdited ] = useState(false);
    const [ inputContent, setInputContent ] = useState(props.content)

    

    return (
        isEdited ? 
            <ItemEdit 
                {...props}
                setIsEdited = {setIsEdited}
            />
            : <ItemMain 
                {...props}
                selected = {selected}
                setSelected = {setSelected}
                setIsEdited = {setIsEdited}
            />
    );
}