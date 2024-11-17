import { GameData } from "./GameData"


function App() {
  const gameData = GameData

  return (
    <>
      {gameData.map((game, index) => {
        <li>{game.name}</li>
      })}
    </>
  )
}

export default App
