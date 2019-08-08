class Item < ApplicationRecord
  has_many :character_items
  has_many :characters, through: :character_items
end
