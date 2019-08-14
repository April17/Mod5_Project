class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :effect
      t.string :key
      t.integer :status
      t.integer :rarity

      t.timestamps
    end
  end
end
