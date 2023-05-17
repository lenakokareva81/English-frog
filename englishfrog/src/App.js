
import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import cn from 'classnames';
import SliderKart from './components/slider/sliderKart.jsx';
import words from './components/json/json';
import NoMatch from './components/NoMatch/NoMatch.jsx';
import IgraMemoJpg from './components/memory/memory.jsx'
import Mainpage from './components/Mainpage/Mainpage'
import Table from './components/Table/Table'
import styles from './App.module.css';
import gamegif from './components/img/game.gif'
import gamepng from './components/img/gamepng.png'
import deckpng from './components/img/deckpng.png'
import cardspng from './components/img/cardspng.png'
import frogpng from './components/img/frogpng.png'



function App() {

  return (

    <Router>
      <nav className={styles.header}>
        <ul className={styles.header__menu}>
          <div className={styles.logo}>
            <li>
              <img src={frogpng} className={styles.gif} />
              <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/">

                {/* {cn([styles.front, (isFliped) ? styles.frontvisible : styles.fronthidden])}> */}

                Englishfrog</NavLink>
            </li>
          </div>
          <li>
            <img src={deckpng} className={styles.gif} />
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/table">таблица</NavLink>
          </li>
          <li>
            <img src={cardspng} className={styles.gif} />
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/users">учить</NavLink>
          </li>
          <li>
            <img src={gamepng} className={styles.gif} />
            <NavLink className={styles.link} to="/memory">Игры</NavLink>
          </li>

        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/memory" element={<Memory />} />
          <Route path="/table" element={<TableWords />} />
          <Route path="/users" element={<Kards />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NoMatch404 />} />
        </Routes>

      </div>

      {/* <p><a target="_blank" href="https://icons8.com/icon/WQFGcVqV2UaR/стопка-бумаги">Стопка бумаги</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p> */}

    </Router >

  );
}
function TableWords() {
  return <Table words={words}></Table>;
}

function Main() {
  return <Mainpage />;
}

function Memory() {
  return <IgraMemoJpg words={words.slice(0, 6)}></IgraMemoJpg>;
}

function Kards() {
  return <SliderKart words={words}></SliderKart>;
}

function NoMatch404() {
  return <NoMatch></NoMatch>;
}
export default App;
