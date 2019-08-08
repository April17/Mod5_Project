class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hp, :atk, :def, :x, :y
  has_many :items
end
