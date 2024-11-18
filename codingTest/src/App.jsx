import { useState } from "react";
import { GameData } from "./GameData";
import Header from "./components/Header.jsx";
import Carousell from "./components/Carousell.jsx";
import Bell from './assets/SvgIcons/bell.svg';
import SearchBar from "./components/SearchBar.jsx";
import Categories from "./components/Categories.jsx";
import GameDisplay from "./components/GameDisplay.jsx";
import { Footer } from "./components/Footer.jsx";
import './styles/Header.css'
import filterlogo from './assets/SvgIcons/3BAR.svg'
import Modal from "./components/Modal.jsx";

function App() {
  const [showBar, setShowBar] = useState(false);
  const [activeCat, setActiveCat] = useState("start");
  const [searchVal, setSearchVal] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [gameProviders, setGameProviders] = useState([])
  const [byProvider, setByProvider] = useState([])

  const providers = [
    'EveryMatrix',
    'evolution',
    'Xpanz',
    'ezugi',
    'gameart',
    'hab',
    'hacksaw',
    'inbet',
    'mplay',
    'netent',
    'pgsoft',
    'playngo',
    'PragmaticPlay',
    'ps',
    'playtech',
    'redtiger',
    'relax'
  ]




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

  function handleFilterClick() {
    setShowModal((prev) => !prev)
  }

  function addtoProv(GameProv) {
    if (gameProviders.includes(GameProv)) {
      // Remove the provider if it exists
      setGameProviders(gameProviders.filter(provider => provider !== GameProv));
      console.log('removed');

    } else {
      // Add the new provider to the array
      setGameProviders([...gameProviders, GameProv]);  // Corrected this line
      console.log('added');
    }
  }

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <div className="content-container">
        <Carousell />
        <div className="alert">
          <img src={Bell} alt="Bell" />
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>

        <div className="cat">
          <SearchBar showBar={showBar} handleClick={handleSearchBarClick} />
          <Categories activeCat={activeCat} onCategoryChange={handleCategoryChange} />
        </div>

        {showBar && (<>
          <div className="searchbarcont">
            <input
              placeholder="Search Games"
              type="text"
              className="search-input"
              onChange={handleChange}
            />
            <div onClick={(handleFilterClick)}>
              <img src={filterlogo}></img>

            </div>
          </div>


        </>
        )}

        {showModal && (<div className="modal">
          <Modal onClick={handleFilterClick} providers={providers} addtoProv={addtoProv} />
        </div>


        )}

        <div className="game-container">
          <GameDisplay activeCat={activeCat} searchVal={searchVal} />
        </div>
      </div>

      <div className="footer">
        <Footer activeCat={activeCat} onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  );
}

export default App;
