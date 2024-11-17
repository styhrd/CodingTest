import { useContext, useEffect, useState } from "react";
import { GameData } from "./GameData";
import Header from "./components/Header.jsx";
import Carousell from "./components/Carousell.jsx"
import Bell from './assets/SvgIcons/bell.svg'
import SearchBar from "./components/SearchBar.jsx";


function App() {

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
