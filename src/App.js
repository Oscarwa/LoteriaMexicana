import React from 'react';
import './App.css';
import Deck from './components/Deck';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Player from './components/Player';

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/host" element={<Deck />} />
          <Route path="/player" element={<Player />} />
          <Route path="/" element={
            <div className="start">
              <Link to="/host" className="main-btn" >Anfitrion</Link>
              <Link to="/player" className="main-btn">Jugador</Link>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    );
  
  }
}
