class CharacterItem < ApplicationRecord
  belongs_to :character
  belongs_to :item

  def quantity
    self.character.items.select{|item| item.id == self.item_id}.size
  end
end
