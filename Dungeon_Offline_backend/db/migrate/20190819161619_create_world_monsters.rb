class CreateWorldMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :world_monsters do |t|
      t.integer :monster_id
      t.integer :world_id
      t.timestamps
    end
  end
end
