class RemoveComlumnTitleFromCommentsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column(:comments, :title)
  end
end
