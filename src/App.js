import React from 'react';
import './App.css';
import Deck from './components/Deck';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Board from './components/Board';

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/host">
            <Deck />
          </Route>
          <Route path="/player">
            <Board />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  
  }
}
