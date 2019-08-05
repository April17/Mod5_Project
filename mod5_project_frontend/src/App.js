import React, { Component } from 'react'
import './App.css';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import mapinfo from './assets/Desert_Map.json'
import maptile from './assets/raou_dungeon_tileset/ts_dungeon.png'
// import firetile from './assets/raou_dungeon_tileset/sprites/spr_fire.png'

let controls;

class App extends Component {

  state = {
    initialize: false,
    counter: 0,
    game: {
      width: 160,
      height: 90,
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#000000')
        },
        preload: function(){
          this.load.image("ts-tiles", maptile);
          // this.load.image("spr_fire", firetile)
          this.load.tilemapTiledJSON("map", mapinfo);
        },
        create: function() {
          const map = this.make.tilemap({ key: "map" });
          const tileset = map.addTilesetImage("ts_dungeon", "ts-tiles");
          const water = map.createStaticLayer("water", tileset, 0, 0);
          const walk_way = map.createStaticLayer("walk_way", tileset, 0, 0);
          const walk_way2nd = map.createStaticLayer("walk_way2nd", tileset, 0, 0);
          const blocking_object = map.createStaticLayer("blocking_object", tileset, 0, 0);
          const top_layer = map.createStaticLayer("top_layer", tileset, 0, 0);
          const playable_object = map.createStaticLayer("playable_object", tileset, 0, 0);

          const camera = this.cameras.main;
          const cursors = this.input.keyboard.createCursorKeys();
          controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.15
          });
          camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
          this.scale.setZoom(8.5)
        },
        update: function(time, delta, event) {
          controls.update(delta);
        }
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 } // Top down game, so no gravity
        }
      }
    }
  }

  initializeGame = () => {
    const { game } = this.state
    // this.ionPhaser.game = game
    this.setState({ initialize: true })
    setTimeout(() => {
      console.log(game.instance.events)
    }, 3000)
  }

  render() {
    const { initialize, game } = this.state
    console.log(this.state.counter);
    return (
      <div className="App">
        <header className="App-header">
          { !initialize &&
            <React.Fragment>
              <div onClick={this.initializeGame} className="flex">
                <a href="#1" className="bttn">Initialize</a>
              </div>
            </React.Fragment>
          }
          <IonPhaser game={game} initialize={initialize} />
        </header>
      </div>
    );
  }
}

export default App;
