import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import mapinfo from './assets/active_resources/World.json'
import maptile from './assets/active_resources/ts_dungeon.png'
import herotile from './assets/active_resources/chara_hero.png'

let controls;
let hero;
let cursors;

class Game extends Component {

  state = {
    initialize: false,
    game: {
      width: 320,
      height: 180,
      type: Phaser.AUTO,
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
          gravity: { y: 0 }
        }
      },
      render: {
        pixelArt: true
      },
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#000000')
        },
        preload: function(){
          console.log("this From Preload", this);
          this.load.image("ts-tiles", maptile);
          this.load.tilemapTiledJSON("map", mapinfo);
          this.load.spritesheet("hero", herotile, {frameHeight: 48, frameWidth: 48});
        },
        create: function() {
          console.log("this From Create", this);

          ///////////// Map ///////////////////////
          const map = this.make.tilemap({ key: "map" });
          const tileset = map.addTilesetImage("ts_dungeon", "ts-tiles");
          const bot_layer = map.createStaticLayer("bot_layer", tileset, 0, 0);
          const world_layer = map.createStaticLayer("world_layer", tileset, 0, 0);
          const top_layer = map.createStaticLayer("top_layer", tileset, 0, 0);
          world_layer.setCollisionByProperty({ collides: true });
          top_layer.setDepth(10);
          const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
          /////////// End Map /////////////////////

          /////////// Character ///////////////////
          hero = Phaser.GameObjects.Sprite = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, 'hero').setSize(16, 16)
          this.anims.create({
            key: "idel",
            frameRate: 5,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 0,
              end: 2
            }),
            repeat: -1
          })
          this.anims.create({
            key: "vetory",
            frameRate: 5,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 4,
              end: 6
            }),
            repeat: -1
          })
          this.anims.create({
            key: "walk-left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 12,
              end: 15
            }),
            repeat: -1
          })
          this.anims.create({
            key: "walk-right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 12,
              end: 15
            }),
            repeat: -1
          })
          this.anims.create({
            key: "walk-up",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 16,
              end: 19
            }),
            repeat: -1
          })
          this.anims.create({
            key: "walk-down",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("hero", {
              start: 8,
              end: 11
            }),
            repeat: -1
          })
          window.hero = hero
          this.physics.add.collider(hero, world_layer);
          ////////// End Character ///////////////

          /////////// Camera ///////////////////
          const camera = this.cameras.main;
          camera.startFollow(hero);
          camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

          cursors = this.input.keyboard.addKeys("W, A, S, D");

          this.scale.setZoom(3.5)
          /////////// End Camera ///////////////////
        },
        update: function(time, delta) {
          // console.log("hero x: ", hero.body.x);
          // console.log("hero y: ", hero.body.y);

          const speed = 100;
          const prevVelocity = hero.body.velocity.clone();

          hero.body.setVelocity(0);

          if (cursors.A.isDown) {
            hero.body.setVelocityX(-speed);
          } else if (cursors.D.isDown) {
            hero.body.setVelocityX(speed);
          }

          if (cursors.W.isDown) {
            hero.body.setVelocityY(-speed);
          } else if (cursors.S.isDown) {
            hero.body.setVelocityY(speed);
          }

          hero.body.velocity.normalize().scale(speed);

          if (cursors.A.isDown) {
            hero.flipX = true
            hero.anims.play("walk-left", true);
          } else if (cursors.D.isDown) {
            hero.flipX = false
            hero.anims.play("walk-right", true);
          } else if (cursors.W.isDown) {
            hero.flipX = false
            hero.anims.play("walk-up", true);
          } else if (cursors.S.isDown) {
            hero.flipX = false
            hero.anims.play("walk-down", true);
          } else {
            hero.flipX = false
            hero.anims.play("idel", true);
          }
        }
      }
    }
  }

  initializeGame = () => {
    this.setState({ initialize: true })
  }

  render() {
    const { initialize, game } = this.state
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
