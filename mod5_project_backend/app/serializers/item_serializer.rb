class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :effect, :key, :status
end
