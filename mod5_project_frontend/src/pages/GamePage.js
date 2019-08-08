import React, { Component } from 'react'
import Game from '../components/Game'
import HeroStatus from '../components/HeroStatus'
import  '../assets/style/GamePage.css'
// import PhaserReactAdapter from '../components/PhaserReactAdapter'



class GamePage extends Component {

  render() {
    return (
      <div className="GamePage">
        <header className="App-header">
          <div className="Game-Component">
            <Game />
          </div>
          <div className="HeroStatus-Component">
            <HeroStatus />
          </div>
        </header>
      </div>
    );
  }
}

export default GamePage;
