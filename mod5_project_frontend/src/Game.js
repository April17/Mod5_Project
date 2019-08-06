import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import mapinfo from './assets/active_resources/World.json'
import maptile from './assets/active_resources/ts_dungeon.png'
import heroinfo from './assets/active_resources/Hero.json'
import herotile from './assets/active_resources/Hero.png'
// import firetile from './assets/raou_dungeon_tileset/sprites/spr_fire.png'

let controls;
let player;

class Game extends Component {

  state = {
    initialize: false,
    counter: 0,
    game: {
      width: 320,
      height: 180,
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#000000')
        },
        preload: function(){
          this.load.image("ts-tiles", maptile);
          // this.load.image("spr_fire", firetile)
          this.load.tilemapTiledJSON("map", mapinfo);
          this.load.atlas("hero", herotile, heroinfo);
        },
        create: function() {
          const map = this.make.tilemap({ key: "map" });
          const tileset = map.addTilesetImage("ts_dungeon", "ts-tiles");
          const bot_layer = map.createStaticLayer("bot_layer", tileset, 0, 0);
          const world_layer = map.createStaticLayer("world_layer", tileset, 0, 0);
          const top_layer = map.createStaticLayer("top_layer", tileset, 0, 0);
          // this.animatedTiles.init(map)
          world_layer.setCollisionByProperty({ collides: true });
          top_layer.setDepth(10);

          const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");

          player = this.add
            .sprite(spawnPoint.x, spawnPoint.y, "hero", "chara_hero-idel/000.png")
            // .setSize(16, 16)
            // .setOffset(0, 24);

          this.physics.add.collider(player, world_layer);

          const camera = this.cameras.main;
          camera.startFollow(player);
          camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

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
          this.scale.setZoom(3.5)
        },
        update: function(time, delta) {
          // console.log(controls.camera.midPoint);
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
    // const { game } = this.state
    // this.ionPhaser.game = game
    this.setState({ initialize: true })
    // setTimeout(() => {
    //   console.log(game.instance.events)
    // }, 3000)
  }

  render() {
    const { initialize, game } = this.state
    console.log(this.state.counter);
    return (
      <div className="Game">
        <header className="Game-header">
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

export default Game;
