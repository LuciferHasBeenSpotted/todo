import React from 'react';
import ArrowDownIcon from './svgs/ArrowDownIcon';
import ArrowUpIcon from './svgs/ArrowUpIcon';

import PenIcon from './svgs/PenIcon';
import TrashIcon from './svgs/TrashIcon';

export default function NoteHeader(props) {//title: str, content: str, index: int, setNotes: sf, notes: [], action: str, setAction: sf, setIsEdited: sf
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
                
                {props.index != 0 ? 
                    <ArrowUpIcon 
                        {...props}
                    /> 
                    : null
                }

                <h3 style={{ color: 'white' }} >{props.title}</h3>
                <div style={{ color: 'white' }} >{props.action}</div>
            </div>
            <div 
                style = {{
                    width: '15%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <PenIcon {...props} />
                <TrashIcon {...props}/>

                {props.index != (props.notes.length - 1) ? 
                    <ArrowDownIcon 
                        {...props}
                    />
                    : null
                }
            </div>
        </header>
    );
};
