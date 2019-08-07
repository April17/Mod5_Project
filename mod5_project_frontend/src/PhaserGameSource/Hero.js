export class Hero extends Phaser.Physics.Arcade.Sprite {
    hp = 0;
    atk = 0;
    def = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.hp = 10;
        this.atk = 100;
        this.def = 200;
    }
}
