export class Hero extends Phaser.Physics.Arcade.Sprite {
    name = "player 1";
    hp = 0;
    atk = 0;
    def = 0;
    attacking = false;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, heroName: string, heroHp: number, heroAtk: number, heroDef: number) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        // this.setImmovable(true);
        this.name = heroName;
        this.hp = heroHp;
        this.atk = heroAtk;
        this.def = heroDef;

        scene.anims.create({
          key: "vetory",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 4,
            end: 6
          }),
          repeat: -1
        });
        ///////// Idel //////////////
        scene.anims.create({
          key: "idel-down",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 0,
            end: 2
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "idel-up",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 43,
            end: 43
          })
        });
        scene.anims.create({
          key: "idel-sideway",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 39,
            end: 39
          })
        });
        ///////// End Idel //////////////

        ///////// Attack //////////////
        scene.anims.create({
          key: "attack-sideway",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start:24,
            end: 27
          })
        });
        scene.anims.create({
          key: "attack-up",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 28,
            end: 31
          })
        });
        scene.anims.create({
          key: "attack-down",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 19,
            end: 23
          })
        });
        ///////// End Attack //////////////

        ///////// Walk //////////////
        scene.anims.create({
          key: "walk-sideway",
          frameRate: 10,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 12,
            end: 15
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "walk-up",
          frameRate: 10,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 16,
            end: 19
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "walk-down",
          frameRate: 10,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 8,
            end: 11
          }),
          repeat: -1
        });
        ///////// End Walk //////////////

        //////// Hit ///////////////
        scene.anims.create({
          key: "hit-sideway",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 36,
            end: 39
          }),
        });
        scene.anims.create({
          key: "hit-up",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 32,
            end: 35
          }),
        });
        scene.anims.create({
          key: "hit-down",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 40,
            end: 43
          }),
        });
        //////// End Hit ///////////////


    }
}
