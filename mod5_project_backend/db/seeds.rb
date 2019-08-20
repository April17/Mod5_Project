# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fan = User.create(name: "Fan Fan", username:"mfqmfq2", password: "123456")

playground = World.create(name: "Playground", capacity: 1)

sam_slime = Monster.create(name:"Sam", monster_type:"slime", level: 1, exp_provide: 1000, max_hp: 300, hp: 300, atk: 10, def: 20, x: 400, y: 400)
tom_slime = Monster.create(name:"Tom", monster_type:"slime", level: 5, exp_provide: 2000, max_hp: 3000, hp: 3000, atk: 50, def: 40, x: 450, y: 450)

april = Character.create(name:"April", level: 1, exp_next_level: 100, exp: 0, max_hp: 1500, hp: 1500, atk: 100, def: 200, x: 300, y: 300, user: fan)
february = Character.create(name:"February", level: 5, exp_next_level: 1200, exp: 1100, max_hp: 2500, hp: 2500, atk: 200, def: 200, x: 300, y: 300, user: fan)

small_hp_potion = Item.create(name:"Small HP Potion", effect: "Recover 100 HP", key: "hp", rarity: 1, status: 100)
large_hp_potion = Item.create(name:"Large HP Potion", effect: "Recover 1000 HP", key: "hp", rarity: 1, status: 1000)


WorldCharacter.create(world: playground, character: april)

WorldMonster.create(world: playground, monster: sam_slime)
WorldMonster.create(world: playground, monster: tom_slime)

5.times do
  CharacterItem.create(character: april, item: small_hp_potion)
end

5.times do
  CharacterItem.create(character: april, item: large_hp_potion)
end

MonsterItem.create(monster: sam_slime, item: small_hp_potion)
MonsterItem.create(monster: tom_slime, item: large_hp_potion)



puts "HAPPY SEEDING"
