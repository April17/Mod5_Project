class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :hp
      t.integer :atk
      t.integer :def
      t.integer :x
      t.integer :y
      t.integer :world_id

      t.timestamps
    end
  end
end
