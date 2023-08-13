import { useState } from 'react';
import ListHeaderEdit from './ListHeaderEdit';

import ArrowDownIcon from './svgs/ArrowDownIcon';
import ArrowUpIcon from './svgs/ArrowUpIcon';
import PenIcon from './svgs/PenIcon';
import PlusIcon from './svgs/PlusIcon';
import TrashIcon from './svgs/TrashIcon';

export default function ListHeader(props) { //title: str, setAddItem: bool, setLists: sf, lists: [], id: int, content: str, setAction: sf, action: str
    const [ inputContent, setInputContent ] = useState(props.title)
    
    return (
        <header
            style = {{
                width: '100%',
                height: '20%',
                backgroundColor: 'grey',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div
                style = {{
                    width: '20%',
                    display: 'flex',
                    paddingLeft: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {props.id != 0 ?
                    <ArrowUpIcon 
                        setAction = {props.setAction}
                        setLists = {props.setLists}
                        index = {props.id}
                        title = {props.title}
                        content = {props.content}
                    /> : null
                }
                <PenIcon {...props} />

                {
                    props.isEdited ? 
                        <ListHeaderEdit 
                            inputContent = {inputContent} 
                            setInputContent = {setInputContent}
                            {...props}
                        />
                        : <h3 style = {{ color: 'white', fontSize: 15 }} >{props.title}</h3>
                }

                <div style = {{flex: 1, color: 'white', fontSize: 12 }} >{props.action}</div>
            </div>
            <div
                style = {{
                    width: '15%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <PlusIcon 
                    setAction = {props.setAction} 
                    setAddItem = {props.setAddItem}
                />
                <TrashIcon 
                    setAction = {props.setAction} 
                    setLists = {props.setLists}
                    index = {props.id}
                />
                {
                    props.id !== props.lists.length - 1 ?
                        <ArrowDownIcon 
                            setAction = {props.setAction}
                            setLists = {props.setLists}
                            index = {props.id}
                            title = {props.title}
                            content = {props.content}
                        />
                        : null 
                }
            </div>
        </header>
    )
}