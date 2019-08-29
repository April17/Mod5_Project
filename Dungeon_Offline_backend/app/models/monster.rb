class Monster < ApplicationRecord
  has_many :world_monsters
  has_many :worlds, through: :world_monsters

  has_many :monster_items
  has_many :items, through: :monster_items

end
