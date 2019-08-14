class WorldSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :monsters
end
