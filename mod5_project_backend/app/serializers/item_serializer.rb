class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :effect, :key, :rarity, :status

  # def quantity
  #   self.object.character_items.select{|character_item| character_item.character_id == @instance_options[:character_id]}.size
  # end

end
