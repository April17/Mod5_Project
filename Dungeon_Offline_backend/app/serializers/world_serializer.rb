class WorldSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_user_count, :capacity

  has_many :monsters
  has_many :characters
end
