export const levelSystem = (hero, game, key) => {
  if (hero.exp >= hero.exp_next_level) {
    hero.exp = hero.exp - hero.exp_next_level
    hero.exp_next_level = Math.round(hero.exp_next_level * (1+ hero.level/20))
    hero.level ++
    hero.max_hp = hero.max_hp + hero.level * 5
    hero.atk = Math.round(hero.atk + hero.level * 0.5)
    hero.def = hero.def + hero.level
    hero.hp = hero.max_hp
    game.props.addLog({summary: `-Congratulations! ${hero.name} is now Level ${hero.level}.`, key: key.counter()})
  }
}

export const damageSystem = (attacker, defender) => {
  let damageReduction = (defender.level/50) * defender.def
  let damage = 1
  if (attacker.atk > damageReduction ) {
    damage = attacker.atk - damageReduction
  }
  defender.hp = Math.round(defender.hp - damage)
  // console.log("defender level", defender.level);
  // console.log("attacker atk", attacker.atk);
  // console.log("damageReduction", damageReduction);
  // console.log("damage", damage);
}
