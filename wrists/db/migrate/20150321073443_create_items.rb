class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :list_id
      t.boolean :status, default: true

      t.timestamps null: false
    end
  end
end
