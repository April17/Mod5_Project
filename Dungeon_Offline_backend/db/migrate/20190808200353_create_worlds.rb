class CreateWorlds < ActiveRecord::Migration[5.2]
  def change
    create_table :worlds do |t|
      t.string :name
      t.integer :capacity, :default => 5
      t.integer :current_user_count, :default => 0
      t.timestamps
    end
  end
end
