class Character < ApplicationRecord
  belongs_to :user

  has_one :world_character, :dependent => :destroy
  has_one :world, through: :world_character

  has_many :character_items, :dependent => :destroy
  has_many :items, through: :character_items

  validates :name, presence: true
end
