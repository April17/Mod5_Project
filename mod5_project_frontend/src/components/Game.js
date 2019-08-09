import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { Hero } from "../phaser/Hero"
import { connect } from "react-redux"
import mapinfo from '../assets/active_resources/World.json'
import maptile from '../assets/active_resources/ts_dungeon.png'
import herotile from '../assets/active_resources/chara_hero.png'
import { updateHeroStatus } from '../redux/adapters/heroStatusAdapters'

// import { GamingScene } from "./GamingScene";

let hero;
let cursors;
let that;
class Game extends Component {
  constructor(props) {
    super(props)
    that = this;
    this.state = {
      initialize: false,
      game: {
        width: 320,
        height: 180,
        type: Phaser.AUTO,
        physics: {
          default: "arcade",
          arcade: {
            debug: true
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
            this.load.image("ts-tiles", maptile);
            this.load.tilemapTiledJSON("map", mapinfo);
            this.load.spritesheet("hero", herotile, {frameHeight: 48, frameWidth: 48});
          },
          create: function() {
            ///////////// Map ///////////////////////
            const map = this.make.tilemap({ key: "map" });
            const tileset = map.addTilesetImage("ts_dungeon", "ts-tiles");
            map.createStaticLayer("bot_layer", tileset, 0, 0);
            const world_layer = map.createStaticLayer("world_layer", tileset, 0, 0);
            const top_layer = map.createStaticLayer("top_layer", tileset, 0, 0);
            world_layer.setCollisionByProperty({ collides: true });
            top_layer.setDepth(10);
            // const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
            /////////// End Map /////////////////////

            /////////// Character ///////////////////
            console.log(that.props.characterInfo);
            hero = new Hero(this, that.props.characterInfo.x, that.props.characterInfo.y, "hero", that.props.characterInfo.name, that.props.characterInfo.hp, that.props.characterInfo.atk, that.props.characterInfo.def ).setSize(16, 16)
            this.anims.create({
              key: "vetory",
              frameRate: 5,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 4,
                end: 6
              }),
              repeat: -1
            })
            ///////// Idel //////////////
            this.anims.create({
              key: "idel-down",
              frameRate: 5,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 0,
                end: 2
              }),
              repeat: -1
            })
            this.anims.create({
              key: "idel-up",
              frameRate: 5,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 43,
                end: 43
              })
            })
            this.anims.create({
              key: "idel-sideway",
              frameRate: 5,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 39,
                end: 39
              })
            })
            ///////// End Idel //////////////

            ///////// Attack //////////////
            this.anims.create({
              key: "attack-sideway",
              frameRate: 20,
              frames: this.anims.generateFrameNumbers("hero", {
                start:24,
                end: 27
              })
            })
            this.anims.create({
              key: "attack-up",
              frameRate: 20,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 28,
                end: 31
              })
            })
            this.anims.create({
              key: "attack-down",
              frameRate: 20,
              frames: this.anims.generateFrameNumbers("hero", {
                start: 19,
                end: 23
              })
            })
            ///////// End Attack //////////////

            ///////// Walk //////////////
            this.anims.create({
              key: "walk-sideway",
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
            ///////// End Walk //////////////
            window.hero = hero
            this.physics.add.collider(hero, world_layer);
            ////////// End Character ///////////////

            /////////// Camera and Controls ///////////////////
            const camera = this.cameras.main;
            camera.startFollow(hero);
            camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
            cursors = this.input.keyboard.addKeys("W, A, S, D, J, K");
            this.scale.setZoom(3.5)
            /////////// End Camera and Controls ///////////////////
          },
          update: function(time, delta) {
            ///// Hero Movement //////
            const speed = 100;
            const prevVelocity = hero.body.velocity.clone();
            hero.body.setVelocity(0);
            hero.body.velocity.normalize().scale(speed);

            if (cursors.J.isDown) {
              if (hero.body.facing === 13) {
                hero.flipX = true
                hero.anims.nextAnim = "idel-sideway"
                hero.anims.play("attack-sideway", true).setSize(32, 16).setOffset(0, 16)
              } else if (hero.body.facing === 14) {
                hero.flipX = false
                hero.anims.nextAnim = "idel-sideway"
                hero.anims.play("attack-sideway", true).setSize(32, 16).setOffset(16, 16);
              } else if (hero.body.facing === 11) {
                hero.flipX = false
                hero.anims.nextAnim = "idel-up"
                hero.anims.play("attack-up", true).setSize(16, 32).setOffset(16, 0);
              } else if (hero.body.facing === 12) {
                hero.flipX = false
                hero.anims.nextAnim = "idel-down"
                hero.anims.play("attack-down", true).setSize(16, 32).setOffset(16, 16);
              }
            } else if (cursors.A.isDown) {
              hero.setSize(16, 16)
              hero.flipX = true
              hero.anims.play("walk-sideway", true);
              hero.body.setVelocityX(-speed);
            } else if (cursors.D.isDown) {
              hero.setSize(16, 16)
              hero.flipX = false
              hero.anims.play("walk-sideway", true);
              hero.body.setVelocityX(speed);
            } else if (cursors.W.isDown) {
              hero.setSize(16, 16)
              hero.flipX = false
              hero.anims.play("walk-up", true);
              hero.body.setVelocityY(-speed);
            } else if (cursors.S.isDown) {
              hero.setSize(16, 16)
              hero.flipX = false
              hero.anims.play("walk-down", true);
              hero.body.setVelocityY(speed);
            } else {
              if (prevVelocity.x < 0) {
                hero.flipX = true
                hero.anims.play("idel-sideway", true);
              } else if (prevVelocity.x > 0) {
                hero.flipX = false
                hero.anims.play("idel-sideway", true);
              } else if (prevVelocity.y < 0) {
                hero.flipX = false
                hero.anims.play("idel-up", true);
              } else if (prevVelocity.y > 0) {
                hero.flipX = false
                hero.anims.play("idel-down", true);
              }
            }
            /////  End Hero Movement //////

            //// Redux /////////
            that.props.updateHeroStatus({ name: hero.name, hp: hero.hp, atk: hero.atk, def: hero.def, x: hero.body.x.toFixed(0), y: hero.body.y.toFixed(0) })
            //// End Redux /////////

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
                <a href="#1" className="bttn">Play</a>
              </div>
            </React.Fragment>
          }
          <IonPhaser game={game} initialize={initialize} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterInfo: state.status
  }
}

const mapDispatchToProps = {
  updateHeroStatus
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game);
