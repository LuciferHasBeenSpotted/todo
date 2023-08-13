"use client";

import { useState } from 'react';

import Notes from '@/notes/Notes';
import Separator from '@/separator/Separator';
import Lists from '@/lists/Lists';

export default function Home() {

    const [ notesWidth, setNotesWidth ] = useState('49.5%');
    const [ listsWidth, setListsWidth ] = useState('49.5%');

    return (
        <main
            style = {{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}
        >
            <Notes notesWidth = {notesWidth} />
            <Separator setNotesWidth = {setNotesWidth} setListsWidth = {setListsWidth} />
            <Lists listsWidth = {listsWidth} />
            
        </main>
    );
};
