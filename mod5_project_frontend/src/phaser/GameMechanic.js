import { Slime } from "./Slime"
import { ColliderMonster } from './ColliderMonster'
import Phaser from 'phaser'

export const levelSystem = (hero, game, key) => {
  if (hero.exp >= hero.exp_next_level) {
    hero.exp = hero.exp - hero.exp_next_level
    hero.exp_next_level = Math.round(hero.exp_next_level * (1+ hero.level/20))
    hero.level ++
    hero.max_hp = hero.max_hp + hero.level * 5
    hero.atk = Math.round(hero.atk + hero.level * 0.5)
    hero.def = hero.def + hero.level
    hero.hp = hero.max_hp
    game.props.addLog({summary: `-Congratulations! ${hero.name} is now Level ${hero.level}.`})
  }
}

export const damageSystem = (attacker, defender) => {
  let damageReduction = (defender.level/50) * defender.def
  let damage = 1
  if (attacker.atk > damageReduction ) {
    damage = attacker.atk - damageReduction
  }
  defender.hp = Math.round(defender.hp - damage)
  // console.log(`[${defender.name}] defender HP`, defender.hp);
  // console.log("attacker atk", attacker.atk);
  // console.log("damageReduction", damageReduction);
  // console.log("damage", damage);
}

export const monsterSpawner = (scene, game, monster, hero, world_layer, spawnPoint) => {
  monster.x = Phaser.Math.Between((spawnPoint.x-50), (spawnPoint.x+50))
  monster.y = Phaser.Math.Between((spawnPoint.y-50), (spawnPoint.y+50))
  monster.hp = monster.max_hp
  let currentMonster = new Slime(scene, monster).setSize(16, 16)
  new ColliderMonster(game, scene, hero, currentMonster, world_layer, spawnPoint)
  scene.physics.add.collider(currentMonster, world_layer);
}
