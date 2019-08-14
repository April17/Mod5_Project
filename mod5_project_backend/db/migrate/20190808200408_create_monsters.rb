class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :monster_type
      t.integer :exp_provide, :default => 100
      t.integer :max_hp, :default => 1000
      t.integer :hp, :default => 200
      t.integer :atk, :default => 20
      t.integer :def, :default => 20
      t.integer :x, :default => 350
      t.integer :y, :default => 350
      t.integer :world_id

      t.timestamps
    end
  end
end
