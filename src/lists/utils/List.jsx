import { useState } from 'react';
import ListHeader from './ListHeader';
import AddItem from './AddItem';
import Item from './Item';

export default function List(props) {//title: str, content: [str], setLists: sf, lists: [], id: int, setAction: sf
    const [ selected, setSelected ] = useState(false);
    const [ addItem, setAddItem ] = useState(false);
    const [ content, setContent ] = useState(''); 
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
                display: 'inline-block',
            }}
            onMouseEnter={() => handeOnMouseEnter()}
            onMouseLeave={() => setSelected(false)}

        >
            <div>
                {
                    selected ? 
                        <ListHeader 
                            {...props}
                            setAddItem = {setAddItem}
                            content = {content}
                            setIsEdited = {setIsEdited}
                            isEdited = {isEdited}
                        />
                        : null
                }
                <div
                    style = {{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        padding: 15,
                    }}
                >
                    {
                        addItem ? 
                            <AddItem 
                                content = {content} 
                                setContent = {setContent} 
                                setAddItem = {setAddItem}
                                setLists = {props.setLists}
                                id = {props.id}
                            />
                            : null
                    }
                    
                    <div
                        style = {{
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-start', 
                            alignItems: 'flex-start',
                            width: '100%',
                            maxHeight: 75,
                            overflowY: 'scroll'
                        }}
                    >
                        {
                            ...props.content.map((c, i) => {
                                return (
                                    <Item 
                                        key = {i}
                                        itemID = {i}
                                        content = {c}
                                        setAction = {props.setAction}
                                        setLists = {props.setLists}
                                        listID = {props.id}
                                        numberOfItem = {props.content.length}
                                    />
                                ) 
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}