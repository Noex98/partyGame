"use client";
import { usePlayerContext } from '@/Utils/PlayerContext'
import { ForceOrientation } from '@/components';
import React from 'react'

export default function page() {

    const playerContext = usePlayerContext();

    if (!playerContext) return null;

    const { players, setPlayers } = playerContext;

    console.log(players);

    return (
        <ForceOrientation orientation='landscape'>

            <div>Play</div>
        </ForceOrientation>
    )
}
