json.extract! @user, :id, :first_name, :surname, :email, :birthday, :gender
if @user.profile_pic.attached?
    json.profileUrl url_for(@user.profile_pic)
    
end 
if @user.cover_pic.attached?
    json.coverUrl url_for(@user.cover_pic)
end
json.authoredPosts @user.authored_posts.ids
json.receivedPosts @user.received_posts.ids 
json.friends_with @user.friends.ids 
json.initiated_requests_with @user.initiated_requests_with.ids
json.requests_to_approve_from @user.requests_to_approve_from.ids 