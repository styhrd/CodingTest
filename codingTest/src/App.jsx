import { useEffect, useState } from "react";
import { GameData } from "./GameData";
import Header from "./components/Header.jsx";
import Carousell from "./components/Carousell.jsx"
import Bell from './assets/SvgIcons/bell.svg'
import SearchBar from "./components/SearchBar.jsx";

function App() {
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
    <>
      <Header />
      <div className="content-container">
        <Carousell />
        <div className="alert">
          <img src={Bell}></img>
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>
        <SearchBar />
      </div>

    </>
  );
}

export default App;
