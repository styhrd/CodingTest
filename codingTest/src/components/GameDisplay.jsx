import React, { useContext, useEffect, useState } from "react";
import { GameContext } from './DataContext.jsx';
import '../styles/Display.css';

const GameDisplay = ({ activeCat, searchVal }) => {
    const gameData = useContext(GameContext);
    const [arrayGame, setArrayGame] = useState([]);

    function filterGames(category) {
        const filteredArray = gameData.filter(game => game.category.includes(category));
        setArrayGame(filteredArray);
    }

    function makeFave(gameToUpdate) {
        setArrayGame(prevGames => {
            const updatedGames = prevGames.map(game =>
                game.id === gameToUpdate.id
                    ? { ...game, isFavorite: !game.isFavorite }
                    : game
            );

            // If game is favorited, ensure it is in arrayGame
            const isNowFavorite = !gameToUpdate.isFavorite;
            if (isNowFavorite && !prevGames.some(game => game.id === gameToUpdate.id)) {
                return [...updatedGames, { ...gameToUpdate, isFavorite: true }];
            }

            // If game is unfavorited, remove it if not matching active filter
            return updatedGames.filter(game => game.id !== gameToUpdate.id || game.isFavorite);
        });
    }

    useEffect(() => {
        const filteredArray = gameData.filter(game =>
            game.name.toLowerCase().includes(searchVal.toLowerCase())
        );
        setArrayGame(filteredArray);
    }, [searchVal]);

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
                const favgames = gameData.filter(game => game.isFavorite);
                setArrayGame(favgames);
                break;
            default:
                setArrayGame([]);
                break;
        }
    }, [activeCat, gameData]);

    return (
        <>
            <div className="games">
                {arrayGame.map((game, index) => (
                    <div className="game" key={game.id}>
                        <img src={game.img} alt={game.name} />
                        <div onClick={() => makeFave(game)}>
                            {game.isFavorite ? (
                                <i className="bi bi-star-fill"></i>
                            ) : (
                                <i className="bi bi-star"></i>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GameDisplay;
