"use client";

import React from 'react';

import Notes from '@/notes/Notes';
import Separator from '@/separator/Separator';
import Checkboxs from '@/lists/Lists';

export default function Home() {
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
            <Notes />
            <Separator />
            <Checkboxs />
            
        </main>
    );
};
