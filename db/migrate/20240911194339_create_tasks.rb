class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.datetime :start_time
      t.datetime :end_time
      t.integer :user_id
      t.timestamps
    end
    add_index :tasks, :user_id                
  end
end