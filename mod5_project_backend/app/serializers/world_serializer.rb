class WorldSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :monsters
  has_many :characters
end
