import { Hero } from "./Hero";

export class GamingScene extends Phaser.Scene {
  controls;
  hero;
  cursors;
  init() {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload (){
    this.load.image("ts-tiles", maptile);
    this.load.tilemapTiledJSON("map", mapinfo);
    this.load.spritesheet("hero", herotile, {frameHeight: 48, frameWidth: 48});
  }

  create() {
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
    hero = new Hero(this, spawnPoint.x, spawnPoint.y, "hero").setSize(16, 16)
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
      }),
      repeat: -1
    })
    ///////// End Idel //////////////

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
  }

  update(time, delta) {
    // console.log("hero x: ", hero.body.x);
    // console.log("hero y: ", hero.body.y);
    const speed = 100;
    const prevVelocity = hero.body.velocity.clone();

    hero.body.setVelocity(0);

    hero.body.velocity.normalize().scale(speed);

    if (cursors.A.isDown) {
      hero.flipX = true
      hero.anims.play("walk-sideway", true);
      hero.body.setVelocityX(-speed);
    } else if (cursors.D.isDown) {
      hero.flipX = false
      hero.anims.play("walk-sideway", true);
      hero.body.setVelocityX(speed);
    } else if (cursors.W.isDown) {
      hero.flipX = false
      hero.anims.play("walk-up", true);
      hero.body.setVelocityY(-speed);
    } else if (cursors.S.isDown) {
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
  }
}
