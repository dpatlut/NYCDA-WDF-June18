class CreateSkaters < ActiveRecord::Migration[5.2]
  def change
    create_table :skaters do |t|
      t.string :name
      t.integer :age
      t.string :gender

      t.timestamps
    end
  end
end
