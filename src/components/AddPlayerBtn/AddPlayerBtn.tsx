"use client";

import React, { useRef, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { IoMdAddCircle } from 'react-icons/io'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { usePlayerContext } from '@/Utils/PlayerContext';

export const AddPlayerBtn = () => {

    const playerContext = usePlayerContext()
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);

    if(!playerContext) return null;

    const addHandler = () => {
        if(!!inputValue.length){
            playerContext.setPlayers(prev => [...prev, inputValue]);
            setInputValue("")
        }
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <input 
                ref={inputRef}
                className={styles.input} placeholder='Add player' 
                type="text" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <span className={styles.iconsContainer}>
                <button onClick={e => addHandler()}>
                    <IoMdAddCircle size={30}/>
                </button>
                <Link href="/game">
                    <AiOutlineArrowRight size={30}/>
                </Link>
            </span>
        </div>
    )
}
