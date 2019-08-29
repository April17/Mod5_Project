class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :exp_next_level, :exp, :max_hp, :hp, :atk, :def, :x, :y
  has_many :unique_character_owned_items

end
