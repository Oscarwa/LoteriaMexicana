import React from 'react';
import './App.css';
import Deck from './components/Deck';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Player from './components/Player';

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/host">
            <Deck />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
          <Route path="/">
            <div className="start">

              <Link to="/host" className="main-btn" >Anfitrion</Link>
              <Link to="/player" className="main-btn">Jugador</Link>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  
  }
}
