class Character < ApplicationRecord
  belongs_to :user

  has_one :world_character, :dependent => :destroy
  has_one :world, through: :world_character

  has_many :character_items, :dependent => :destroy
  has_many :items, through: :character_items

  validates :name, presence: true

  def unique_character_owned_items
    self.character_items.select('distinct on (item_id) *')
  end

end
