class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :monster_type, :level, :exp_provide, :max_hp, :hp, :atk, :def, :population, :population_cap, :x, :y, :respawn_cooldown
end
