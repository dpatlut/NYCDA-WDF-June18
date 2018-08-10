class AddColumnToDogsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :owner_id, :integer
  end
end
