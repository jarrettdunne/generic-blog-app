# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all
Comment.destroy_all
Post.destroy_all
User.destroy_all

Faker::UniqueGenerator.clear

@user = User.create!(username: 'user', email: 'user@email.com', password: '123456')

(1..10).each do |i|
    user = User.create!(
        username: Faker::Internet.unique.username, 
        email: Faker::Internet.unique.email, 
        password: Faker::Internet.password(min_length: 8))
    rand = Random.rand(5..20)
    (1..rand).each do |j|
        post = Post.create!(
            title: Faker::Hipster.unique.sentence, 
            content: Faker::Hipster.unique.paragraph, 
            user: user)
    end
end

        
u0 = User.first.id
un = User.last.id
p0 = Post.first.id
pn = Post.last.id

(p0..pn).each do |i|
    post = Post.find(i)
    rand = Random.rand(3..15)

    (1..rand).each do |j|
        user = User.find(Random.rand(u0..un))
        Comment.create!(
            content: Faker::Hipster.sentence(word_count: Random.rand(10)), 
            user: user,
            post: post)
    end

    (u0..un).each do |j|
        if Random.rand(0..1) == 1
            Like.create!(
                user: User.find(j), 
                post: post)
        end
    end
end
        
puts "#{User.count} users created."
puts "#{Post.count} posts created."
puts "#{Comment.count} comments created."
puts "#{Like.count} likes created."