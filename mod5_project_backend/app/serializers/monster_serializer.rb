class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :monster_type, :hp, :atk, :def, :x, :y
end
