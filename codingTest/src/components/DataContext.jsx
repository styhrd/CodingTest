import React, { createContext, useState, useEffect } from "react";
import { GameData } from "../GameData.jsx";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    async function fetchData() {
        const simulatedFetch = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(GameData);
            }, 3000);
        });

        setGames(simulatedFetch);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <GameContext.Provider value={games}>
            {children}
        </GameContext.Provider>
    );
};
