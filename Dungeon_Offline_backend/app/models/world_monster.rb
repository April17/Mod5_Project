class WorldMonster < ApplicationRecord
  belongs_to :monster
  belongs_to :world
end
