export class ColliderMonster {
  constructor (scene, hero, monster) {
    const monsterClassName = monster.constructor.name
    scene.physics.world.addCollider(hero, monster, (hero: Hero, monster: monsterClassName) => {
     if (hero.attacking === true) {
       monster.hp = monster.hp - 10
       console.log("Slime HP: ", monster.hp);
       if (hero.body.facing === 13) {
         monster.flipX = false
         monster.anims.nextAnim = `${monster.type}-idel-sideway`
         monster.anims.play(`${monster.type}-hit-sideway`, true)
         monster.setX(monster.x - 8)
       } else if (hero.body.facing === 14) {
         monster.flipX = true
         monster.anims.nextAnim = `${monster.type}-idel-sideway`
         monster.anims.play(`${monster.type}-hit-sideway`, true)
         monster.setX(monster.x + 8)
       } else if (hero.body.facing === 11) {
         monster.flipX = false
         monster.anims.nextAnim = `${monster.type}-idel-down`
         monster.anims.play(`${monster.type}-hit-up`, true)
         monster.setY(monster.y - 8)
       } else if (hero.body.facing === 12) {
         monster.flipX = false
         monster.anims.nextAnim = `${monster.type}-idel-up`
         monster.anims.play(`${monster.type}-hit-down`, true)
         monster.setY(monster.y + 8)
       }
     }
     if (monster.hp < 0) {
       monster.destroy()
     }
   })
 }
}
