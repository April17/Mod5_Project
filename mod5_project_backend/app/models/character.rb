class Character < ApplicationRecord
  belongs_to :user
  belongs_to :world
  has_many :character_items, :dependent => :destroy
  has_many :items, through: :character_items

  validates :name, presence: true
end
