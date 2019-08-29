# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fan = User.create(name: "Fan Fan", username:"mfqmfq2", password: "123456")

playground = World.create(name: "Playground0", capacity: 1)

sam_slime = Monster.create(name:"Sam", monster_type:"slime", level: 1, exp_provide: 1000, max_hp: 300, hp: 300, atk: 10, def: 20, x: 400, y: 400, respawn_cooldown: 3000)
tom_slime = Monster.create(name:"Tom", monster_type:"slime", level: 5, exp_provide: 2000, max_hp: 3000, hp: 3000, atk: 50, def: 40, x: 500, y: 450, respawn_cooldown: 5000)
master_slime = Monster.create(name:"King_Samy", monster_type:"slime", level: 20, exp_provide: 20000, population_cap: 1, max_hp: 30000, hp: 30000, atk: 200, def: 100, x: 400, y: 300, respawn_cooldown: 10000)

april = Character.create(name:"April", level: 1, exp_next_level: 100, exp: 0, max_hp: 1500, hp: 1500, atk: 100, def: 200, x: 450, y: 550, user: fan)
february = Character.create(name:"February", level: 5, exp_next_level: 1200, exp: 1100, max_hp: 2500, hp: 2500, atk: 200, def: 200, x: 450, y: 550, user: fan)

small_hp_potion = Item.create(name:"HP Potion(S)", effect: "Recover 100 HP", key: "hp", icon_name: "small_HP", rarity: 1, status: 100, cooldown: 1000)
large_hp_potion = Item.create(name:"HP Potion(L)", effect: "Recover 1000 HP", key: "hp", icon_name: "large_HP", rarity: 2, status: 1000, cooldown: 3000)
atk_damage_potion = Item.create(name:"Attack Potion(L)", effect: "Add 1000 Atk", key: "atk_boost", icon_name: "atk_potion", rarity: 3, status: 1000, cooldown: 5000)
super_damage_potion = Item.create(name:"Attack Potion(XL)", effect: "Add 10000 Atk", key: "atk_boost", icon_name: "super_atk_potion", rarity: 4, status: 10000, cooldown: 10000)



WorldCharacter.create(world: playground, character: april)

WorldMonster.create(world: playground, monster: sam_slime)
WorldMonster.create(world: playground, monster: tom_slime)
WorldMonster.create(world: playground, monster: master_slime)

5.times do
  CharacterItem.create(character: april, item: small_hp_potion)
end
CharacterItem.create(character: april, item: large_hp_potion)
CharacterItem.create(character: april, item: atk_damage_potion)
CharacterItem.create(character: april, item: super_damage_potion)

5.times do
  CharacterItem.create(character: february, item: large_hp_potion)
end

MonsterItem.create(monster: sam_slime, item: small_hp_potion)
MonsterItem.create(monster: sam_slime, item: large_hp_potion)

MonsterItem.create(monster: tom_slime, item: large_hp_potion)
MonsterItem.create(monster: tom_slime, item: atk_damage_potion)

MonsterItem.create(monster: master_slime, item: atk_damage_potion)
MonsterItem.create(monster: master_slime, item: super_damage_potion)



puts "HAPPY SEEDING"
