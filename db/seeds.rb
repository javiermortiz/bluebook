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

beast = User.create(
    email: 'beast@xmen.com',
    password: 'mrbeast',
    first_name: 'Hank',
    surname: 'McCoy',
    birthday: '1963-09-1',
    gender: 'male'
)

beetle = User.create(
    email: 'bluebeetle@dc.com',
    password: 'bluebeetle',
    first_name: 'Blue',
    surname: 'Beetle',
    birthday: '1939-08-1',
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

beast_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/beast.jpg')

beast.profile_pic.attach(
    io: beast_profile, 
    filename: "beast.jpg"
)

beast_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/xmen.jpg')

beast.cover_pic.attach(
    io: beast_cover, 
    filename: "xmen.jpg"
)

beetle_profile = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/beetle.jpg')

beetle.profile_pic.attach(
    io: beetle_profile, 
    filename: "beetle.jpg"
)

beetle_cover = open('https://bluebook-demo-dev.s3-us-west-1.amazonaws.com/beetle_cover.jpg')

beetle.cover_pic.attach(
    io: beetle_cover, 
    filename: "beetle_cover.jpg"
)

Friendship.create(user_id: beetle.id, friends_with_user_id: squirtle.id)
Friendship.create(user_id: squirtle.id, friends_with_user_id: beetle.id)
Friendship.create(user_id: beetle.id, friends_with_user_id: beast.id)
Friendship.create(user_id: beast.id, friends_with_user_id: beetle.id)
Friendship.create(user_id: squirtle.id, friends_with_user_id: beast.id)
Friendship.create(user_id: beast.id, friends_with_user_id: squirtle.id)
FriendshipRequest.create(status: "pending", started_by_user_id: manhattan.id, waiting_for_user_id: beetle.id)

Post.create(body: "It's hard to be a beast... sometimes.", author_id: beast.id, for_user_id: squirtle.id)
Post.create(body: "Squirtle Squirtle!", author_id: squirtle.id, for_user_id: beast.id)
Post.create(
    body: "I'm still trying to figure out the 'On' button for this thing.", 
    author_id: beetle.id,
    for_user_id: beetle.id 
)
Post.create(body: "Squirtle Squirtle!", author_id: squirtle.id, for_user_id: beetle.id)
Post.create(body: "Oh... My stars and garters!", author_id: beast.id, for_user_id: beetle.id)
Post.create(body: "Nothing ends...Nothing ever ends.", author_id: manhattan.id, for_user_id: manhattan.id)
