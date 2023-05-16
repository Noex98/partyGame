import { usePlayerContext } from '@/Utils/PlayerContext'
import React from 'react'

export default function page() {

    const playerContext = usePlayerContext();

    if (!playerContext) return null;

    const { players, setPlayers } = playerContext;

    console.log(players);

    return (
        <div>page</div>
    )
}
