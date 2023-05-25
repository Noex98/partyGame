"use client";
import styles from './style.module.scss';
import React, { useState } from 'react'
import { 
    Button,
    AddPlayerBtn,
    BackgroundPotrait,
    PlayerDisplay
} from '@/components';

export const metadata = {
    title: 'Home',
    description: 'idk man',
};

export default function page() {

    const [addPlayerFocus, setAddPlayerFocus] = useState(false);

    return (
        <div>
            <BackgroundPotrait />
            <div className={styles.contentWrapper}>
                <div className={styles.playerDisplayWrapper}>
                    <PlayerDisplay />
                </div>
                <div className={styles.buttonContainer + " " + (addPlayerFocus && styles.buttonContainerActive)}>
                    <AddPlayerBtn
                        focusHandler={() => setAddPlayerFocus(true)}
                        blurHandler={() => setAddPlayerFocus(false)}
                    />
                    {!addPlayerFocus && (
                        <>
                            <Button text='Settings' />
                            <Button text='Start' />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

