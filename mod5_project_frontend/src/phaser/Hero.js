export class Hero extends Phaser.Physics.Arcade.Sprite {
    name = "player 1";
    hp = 0;
    atk = 0;
    def = 0;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, heroName: string, heroHp: number, heroAtk: number, heroDef: number) {
        super(scene, x, y, texture);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.name = heroName;
        this.hp = heroHp;
        this.atk = heroAtk;
        this.def = heroDef;
    }
}
