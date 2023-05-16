"use client";

import { Logo } from '@/components';
import styles from './style.module.scss';
import React, { useState } from 'react'
import { Button, AddPlayerBtn } from '@/components';

export const metadata = {
    title: 'Home',
    description: 'idk man',
};

export default function page() {

    const [addPlayerFocus, setAddPlayerFocus] = useState(false);

    return (
        <div>
            <Logo/>
            
            <div className={styles.buttonContainer + " " + ( !addPlayerFocus && styles.buttonContainerPadding)}>
                <AddPlayerBtn 
                    focusHandler={() => setAddPlayerFocus(true)}
                    blurHandler={() => setAddPlayerFocus(false)}
                />
                {!addPlayerFocus && (
                    <>
                        <Button text='Settings'/>
                        <Button text='Start'/>
                    </>
                )}
            </div>

        </div>
    )
}

