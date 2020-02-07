# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

megamind.profile_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/megamind_profile.jpg"), 
    filename: "megamind_profile.jpg"
)

megamind.cover_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/megamind_cover.jpg"), 
    filename: "megamind_cover.jpg"
)

squirtle.profile_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/squirtle_profile.jpg"), 
    filename: "squirtle_profile.jpg"
)

squirtle.cover_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/squirtle_cover.png"), 
    filename: "squirtle_cover.png"
)