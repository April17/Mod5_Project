class CreateMonsterItems < ActiveRecord::Migration[5.2]
  def change
    create_table :monster_items do |t|
      t.integer :monster_id
      t.integer :item_id
      t.timestamps
    end
  end
end
