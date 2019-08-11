# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fan = User.create(name: "Fan Fan", username:"mfqmfq2", password: "123456")

playground = World.create(name: "Playground")

april = Character.create(name:"April", hp: 1500, atk: 100, def: 200, x: 400, y: 400, user: fan, world: playground)

february = Character.create(name:"February", hp: 2500, atk: 200, def: 200, x: 400, y: 400, user: fan, world: playground)


small_hp_potion = Item.create(name:"Small HP Potion", effect: "Recover 100 HP", key: "hp", status: 100)

april_got_small_hp_potion = CharacterItem.create(character: april, item: small_hp_potion)

sam_slime = Monster.create(name:"Sam", monster_type:"slime", hp: 100, atk: 10, def: 20, x: 300, y: 300, world: playground)

puts "HAPPY SEEDING"
