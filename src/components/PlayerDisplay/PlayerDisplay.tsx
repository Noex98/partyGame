"use client";
import styles from './style.module.scss';
import { usePlayerContext } from "@/Utils/PlayerContext";
import { RxCross2 } from 'react-icons/Rx';

export const PlayerDisplay = () => {

    const playerContext = usePlayerContext();
    if(!playerContext) return null;

    const deleteHandler = (i: number) => {
        playerContext.setPlayers(prev => {
            prev.splice(i, 2);
            return [...prev];
        })
    }

    return (
        <div className={styles.container}>
            {playerContext.players.map((player, i) => (
                <span key={i}>
                    {player}
                    <RxCross2 
                        onClick={() => deleteHandler(i)}
                        size={16}
                    />
                </span>
            ))}
        </div>
    );
};
