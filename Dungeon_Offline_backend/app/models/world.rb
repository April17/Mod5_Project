class World < ApplicationRecord
  has_many :world_characters
  has_many :characters, through: :world_characters

  has_many :world_monsters
  has_many :monsters, through: :world_monsters

end
