class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :effect
      t.string :key
      t.string :icon_name
      t.integer :status, :default => 0
      t.integer :rarity, :default => 0
      t.integer :cooldown, :default => 1000

      t.timestamps
    end
  end
end
