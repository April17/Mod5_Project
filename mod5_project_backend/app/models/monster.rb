class Monster < ApplicationRecord
  has_many :world_monsters
  has_many :worlds, through: :world_monsters
end
