export class Slime extends Phaser.Physics.Arcade.Sprite {
    name = "";
    type = "";
    hp = 0;
    atk = 0;
    def = 0;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, name: string) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.name = name;
        this.type = "slime"
        this.hp = 100;
        this.atk = 10;
        this.def = 20;
        // debugger
        scene.anims.create({
          key: "slime-vetory",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 4,
            end: 6
          }),
          repeat: -1
        });
        ///////// Idel //////////////
        scene.anims.create({
          key: "slime-idel-down",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 0,
            end: 2
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "slime-idel-up",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 43,
            end: 43
          })
        });
        scene.anims.create({
          key: "slime-idel-sideway",
          frameRate: 5,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 39,
            end: 39
          })
        });
        ///////// End Idel //////////////

        ///////// Attack //////////////
        scene.anims.create({
          key: "slime-attack-sideway",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start:24,
            end: 27
          })
        });
        scene.anims.create({
          key: "slime-attack-up",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 28,
            end: 31
          })
        });
        scene.anims.create({
          key: "slime-attack-down",
          frameRate: 20,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 19,
            end: 23
          })
        });
        ///////// End Attack //////////////

        ///////// Walk //////////////
        scene.anims.create({
          key: "slime-walk-sideway",
          frameRate: 10,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 12,
            end: 15
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "slime-walk-up",
          frameRate: 10,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 16,
            end: 19
          }),
          repeat: -1
        });
        scene.anims.create({
          key: "slime-walk-down",
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
          key: "slime-hit-sideway",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 36,
            end: 39
          }),
        });
        scene.anims.create({
          key: "slime-hit-up",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 32,
            end: 35
          }),
        });
        scene.anims.create({
          key: "slime-hit-down",
          frameRate: 15,
          frames: scene.anims.generateFrameNumbers(texture, {
            start: 40,
            end: 43
          }),
        });
        //////// End Hit ///////////////
    }
}
