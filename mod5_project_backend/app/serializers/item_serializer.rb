class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :effect, :key, :rarity, :status
end
