class CreateRobots < ActiveRecord::Migration[5.2]
  def change
    create_table :robots do |t|
      t.string :name
      t.boolean :angry
      t.integer :power
    end
  end
end
