import { GameData } from "./GameData"


function App() {
  const gameData = GameData

  return (
    <>
      {gameData.map((game, index) => {
        return <li key={index}>{game.name}</li>
      })}
    </>
  )
}

export default App
