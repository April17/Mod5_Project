class MonsterItem < ApplicationRecord
  belongs_to :item
  belongs_to :monster 
end
