class WorldCharacter < ApplicationRecord
  belongs_to :world
  belongs_to :character
end
