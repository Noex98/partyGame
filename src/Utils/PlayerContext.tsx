'use client';

import { createContext, useContext, useState } from "react";

type IPlayerContext = {
    players: string[],
    setPlayers: React.Dispatch<React.SetStateAction<string[]>>
}

const PlayerContext = createContext<IPlayerContext | null>(null);

interface Props {
    children: React.ReactNode
}

export function PlayerContextProvider({ children }: Props) {

    const [players, setPlayers] = useState<string[]>([]);

    return (
        <PlayerContext.Provider value={{players: players, setPlayers: setPlayers}}>{children}</PlayerContext.Provider>
    );
}

export function usePlayerContext() {
    return useContext(PlayerContext);
}