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

sulley.profile_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/sulley_profile.jpg"), 
    filename: "sulley_profile.jpg"
)

sulley.cover_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/sulley_cover.jpg"), 
    filename: "sulley_cover.jpg"
)

manhattan.profile_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/manhattan_profile.jpeg"), 
    filename: "manhattan_profile.jpeg"
)

manhattan.cover_pic.attach(
    io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/manhattan_cover.jpeg"), 
    filename: "manhattan_cover.jpeg"
)

Friendship.create(user_id: megamind.id, friends_with_user_id: squirtle.id)
Friendship.create(user_id: squirtle.id, friends_with_user_id: megamind.id)
Friendship.create(user_id: megamind.id, friends_with_user_id: sulley.id)
Friendship.create(user_id: sulley.id, friends_with_user_id: megamind.id)

FriendshipRequest.create(status: "pending", started_by_user_id: manhattan.id, waiting_for_user_id: megamind.id)

Post.create(body: "ROAR!!!", author_id: sulley.id, for_user_id: megamind.id)
Post.create(body: "squirtle squirtle!", author_id: squirtle.id, for_user_id: megamind.id)
Post.create(
    body: "I'm the bad guy. I don't save the day, I don't fly off into the sunset and I don't get the girl.", 
    author_id: megamind.id,
    for_user_id: megamind.id 
)
Post.create(body: "Nothing ends...Nothing ever ends.", author_id: manhattan.id, for_user_id: manhattan.id)
