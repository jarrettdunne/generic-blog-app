# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

user_list = [
    {
        "username": "user1",
        "email": "user1@email.com",
        "password": "123456"
    }
]

lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

@user = User.create!(username: 'user1', email: 'user1@email.com', password: '123456')
puts "#{User.count} users created."

@post1 = Post.create!(title: 'This is a blog 1', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 2', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 3', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 4', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 5', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 6', content: lorem, format: 'none', user: @user)
Post.create!(title: 'This is a blog 7', content: lorem, format: 'none', user: @user)
puts "#{Post.count} posts created."

Comment.create!(title: 'My comment', content: 'Lorem ipsum', format: '{}', user: @user, post: @post1)
puts "#{Comment.count} comments created."
