class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :monster_type
      t.integer :level, :default => 1
      t.integer :exp_provide, :default => 100
      t.integer :max_hp, :default => 1000
      t.integer :hp, :default => 200
      t.integer :atk, :default => 20
      t.integer :def, :default => 20
      t.integer :x, :default => 350
      t.integer :y, :default => 350
      t.integer :population, :default => 0
      t.integer :population_cap, :default => 3
      t.integer :respawn_cooldown, :default => 3000

      t.timestamps
    end
  end
end
