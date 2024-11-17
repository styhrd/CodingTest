import { useState } from "react";
import { GameData } from "./GameData";
import Header from "./components/Header.jsx";
import Carousell from "./components/Carousell.jsx";
import Bell from './assets/SvgIcons/bell.svg';
import SearchBar from "./components/SearchBar.jsx";
import Categories from "./components/Categories.jsx";
import GameDisplay from "./components/GameDisplay.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [showBar, setShowBar] = useState(false);
  const [activeCat, setActiveCat] = useState("start");
  const [searchVal, setSearchVal] = useState("")

  function handleSearchBarClick() {
    setShowBar((prevstate) => !prevstate);
  }

  // Function to handle category change
  function handleCategoryChange(category) {
    setActiveCat(category);
  }

  function handleChange(e) {
    setSearchVal(e.target.value)

  }

  return (
    <>
      <Header />
      <div className="content-container">
        <Carousell />
        <div className="alert">
          <img src={Bell} alt="Bell" />
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>

        <div className="cat">
          <SearchBar showBar={showBar} handleClick={handleSearchBarClick} />
          {/* Pass handleCategoryChange and activeCat as props */}
          <Categories activeCat={activeCat} onCategoryChange={handleCategoryChange} />
        </div>

        {showBar && (
          <input
            placeholder="Search Games"
            type="text"
            className="search-input"
            onChange={handleChange}
          />
        )}

        {/* Pass activeCat as a prop to GameDisplay */}
        <div className="game-container">
          <GameDisplay activeCat={activeCat} searchVal={searchVal} />
        </div>
        <Footer activeCat={activeCat} onCategoryChange={handleCategoryChange} />
      </div>
    </>
  );
}

export default App;
