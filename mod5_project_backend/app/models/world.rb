class World < ApplicationRecord
  has_many :characters
  has_many :monsters
end
