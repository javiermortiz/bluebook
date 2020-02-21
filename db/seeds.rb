# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Friendship.destroy_all
FriendshipRequest.destroy_all
Post.destroy_all

squirtle = User.create(
    email: 'squirtle@pokemon.com', 
    password: 'squirtle',
    first_name: 'Squirtle',
    surname: 'Squirtle',
    birthday: '1996-2-27',
    gender: 'male'
)

megamind = User.create(
    email: 'megamind@dreamworks.com',
    password: 'megamind',
    first_name: 'Megamind',
    surname: '3000',
    birthday: '1980-11-5',
    gender: 'male'
)

sulley = User.create(
    email: 'sulley@monstersinc.com',
    password: 'sulley',
    first_name: 'James P.',
    surname: 'Sullivan',
    birthday: '1985-11-2',
    gender: 'male'
)

manhattan = User.create(
    email: 'manhattan@watchmen.com',
    password: 'manhattan',
    first_name: 'Doctor',
    surname: 'Manhattan',
    birthday: '1938-09-1',
    gender: 'male'
)

megamind_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/megamind_profile.jpg')

megamind.profile_pic.attach(
    io: megamind_profile, 
    filename: "megamind_profile.jpg"
)

megamind_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/megamind_cover.jpg')

megamind.cover_pic.attach(
    io: megamind_cover, 
    filename: "megamind_cover.jpg"
)

squirtle_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/squirtle_profile.jpg')

squirtle.profile_pic.attach(
    io: squirtle_profile, 
    filename: "squirtle_profile.jpg"
)

squirtle_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/squirtle_cover.png')

squirtle.cover_pic.attach(
    io: squirtle_cover, 
    filename: "squirtle_cover.png"
)

sulley_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/sulley_profile.jpg')

sulley.profile_pic.attach(
    io: sulley_profile, 
    filename: "sulley_profile.jpg"
)

sulley_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/sulley_cover.jpg')

sulley.cover_pic.attach(
    io: sulley_cover, 
    filename: "sulley_cover.jpg"
)

manhattan_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/manhattan_profile.jpeg')

manhattan.profile_pic.attach(
    io: manhattan_profile, 
    filename: "manhattan_profile.jpeg"
)

manhattan_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/manhattan_cover.jpeg')

manhattan.cover_pic.attach(
    io: manhattan_cover, 
    filename: "manhattan_cover.jpeg"
)

Friendship.create(user_id: megamind.id, friends_with_user_id: squirtle.id)
Friendship.create(user_id: squirtle.id, friends_with_user_id: megamind.id)
Friendship.create(user_id: megamind.id, friends_with_user_id: sulley.id)
Friendship.create(user_id: sulley.id, friends_with_user_id: megamind.id)
Friendship.create(user_id: squirtle.id, friends_with_user_id: sulley.id)
Friendship.create(user_id: sulley.id, friends_with_user_id: squirtle.id)
FriendshipRequest.create(status: "pending", started_by_user_id: manhattan.id, waiting_for_user_id: megamind.id)

Post.create(body: "ROAR!!!", author_id: sulley.id, for_user_id: squirtle.id)
Post.create(body: "Squirtle Squirtle!", author_id: squirtle.id, for_user_id: sulley.id)
Post.create(
    body: "I'm the bad guy. I don't save the day, I don't fly off into the sunset and I don't get the girl.", 
    author_id: megamind.id,
    for_user_id: megamind.id 
)
Post.create(body: "Squirtle Squirtle!", author_id: squirtle.id, for_user_id: megamind.id)
Post.create(body: "ROAR!!!", author_id: sulley.id, for_user_id: megamind.id)
Post.create(body: "Nothing ends...Nothing ever ends.", author_id: manhattan.id, for_user_id: manhattan.id)
