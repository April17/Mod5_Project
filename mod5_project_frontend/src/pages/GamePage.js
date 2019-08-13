import React, { Component } from 'react'
import Game from '../components/Game'
import Inventory from '../components/Inventory'
import Chat from '../components/Chat'
import MonsterHp from '../components/MonsterHp'
import PlayerLog from '../components/PlayerLog'
import HeroStatus from '../components/HeroStatus'
import  '../assets/style/GamePage.css'
// import PhaserReactAdapter from '../components/PhaserReactAdapter'



class GamePage extends Component {

  render() {
    return (
      <div className="GamePage">
        <div className="ui divided centered grid">
          <div className="stretched row">
            <div className="three wide column No-Space">
              <div className="ui segment No-Space">
                <Chat/>
              </div>
            </div>
            <div className="ten wide column No-Space">
              <div className="ui segment No-Space">
                <MonsterHp/>
              </div>
              <div id="game" className="ui segment Game-Component No-Space">
                  <Game routingProps={this.props}/>
              </div>
              <div className="ui segment No-Space">
                <HeroStatus />
              </div>
            </div>
            <div className="three wide column No-Space">
              <div className="ui segment No-Space">
                <PlayerLog/>
              </div>
              <div className="ui segment No-Space">
                <Inventory/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
