class CreateProficiencies < ActiveRecord::Migration
  def change
    create_table :proficiencies do |t|
      t.integer :experience, :default => 0
      t.boolean :formal_education, :default => false
      t.integer :user_id
      t.integer :skill_id

      t.timestamps
    end
  end
end
