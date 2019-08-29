class CharacterItemSerializer < ActiveModel::Serializer
  attributes :item_id, :quantity, :character_name
  belongs_to :item

  def character_name
    self.object.character.name
  end

end
