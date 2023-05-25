"use client";
import styles from './style.module.scss';
import React, { useState } from 'react'
import { 
    AddPlayerBtn,
    BackgroundPotrait,
    PlayerDisplay
} from '@/components';
import { ButtonLink } from '@/components/ButtonLink';

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
                            <ButtonLink href={'/settings'} text='Settings' />
                            <ButtonLink href={'/play'} text='Start' />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

