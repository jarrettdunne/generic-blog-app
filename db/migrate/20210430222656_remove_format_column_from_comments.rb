class RemoveFormatColumnFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column(:comments, :format)
  end
end
