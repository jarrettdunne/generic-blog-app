class RemoveFormatColumnFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column(:posts, :format)
  end
end
