class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :monster_type, :exp_provide, :max_hp, :hp, :atk, :def, :x, :y
end
