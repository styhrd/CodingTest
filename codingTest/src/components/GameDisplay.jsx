import React, { useContext, useEffect, useState } from "react";
import { GameContext } from './DataContext.jsx';
import '../styles/Display.css';

const GameDisplay = ({ activeCat, searchVal }) => {
    const gameData = useContext(GameContext);
    const [arrayGame, setArrayGame] = useState([]);
    const [favGames, setFavGames] = useState([]);

    // Filter games by category
    function filterGames(category) {
        const filteredArray = gameData.filter(game => game.category.includes(category));
        setArrayGame(filteredArray);
    }

    // Toggle favorite status
    function makeFave(gameToUpdate) {
        setFavGames(prevFavGames => {
            const isAlreadyFavorite = prevFavGames.some(game => game.id === gameToUpdate.id);

            if (isAlreadyFavorite) {
                // Remove from favorites
                return prevFavGames.filter(game => game.id !== gameToUpdate.id);
            } else {
                // Add to favorites
                return [...prevFavGames, gameToUpdate];
            }
        });
    }

    // Check if a game is in favorites
    function checkFave(gameId) {
        return favGames.some(game => game.id === gameId);
    }

    // Handle search filter
    useEffect(() => {
        const filteredArray = gameData.filter(game =>
            game.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        setArrayGame(filteredArray);
    }, [searchVal, gameData]);

    // Handle category filter
    useEffect(() => {
        switch (activeCat) {
            case "start":
                setArrayGame(gameData);
                break;
            case "slots":
                filterGames("slots");
                break;
            case "live":
                filterGames("live");
                break;
            case "jackpot":
                filterGames("jackpot");
                break;
            case "table":
                filterGames("table");
                break;
            case "bingo":
                filterGames("bingo");
                break;
            case "other":
                filterGames("other");
                break;
            case "new":
                const newGames = gameData.filter(game => game.isNew);
                setArrayGame(newGames);
                break;
            case "fave":
                setArrayGame(favGames);
                break;
            default:
                setArrayGame([]);
                break;
        }
    }, [activeCat, gameData, favGames]);

    return (
        <>
            <div className="games">
                {arrayGame.map((game) => (
                    <div className="game" key={game.id}>
                        <img src={game.img} alt={game.name} />
                        <div onClick={() => makeFave(game)}>
                            {checkFave(game.id) ? (
                                <i className="bi bi-star-fill"></i> // Filled star
                            ) : (
                                <i className="bi bi-star"></i> // Empty star
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GameDisplay;
