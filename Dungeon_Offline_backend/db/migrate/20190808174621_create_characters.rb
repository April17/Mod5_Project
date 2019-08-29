class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :level, :default => 1
      t.integer :exp_next_level, :default => 1000
      t.integer :exp, :default => 0
      t.integer :max_hp, :default => 1000
      t.integer :hp, :default => 100
      t.integer :atk, :default => 20
      t.integer :def, :default => 20
      t.integer :x, :default => 450
      t.integer :y, :default => 550
      t.integer :user_id

      t.timestamps
    end
  end
end
