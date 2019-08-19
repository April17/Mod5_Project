class CreateWorldCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :world_characters do |t|
      t.integer :character_id
      t.integer :world_id
      t.timestamps
    end
  end
end
