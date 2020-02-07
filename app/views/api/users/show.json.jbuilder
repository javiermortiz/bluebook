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
json.initiated_requests do
    @user.initiated_requests.each do |request|
        json.set! request.waiting_for_user_id do 
            json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
        end
    end 
end 
json.requests_to_approve_from @user.requests_to_approve_from.ids 
json.requesters do 
    @user.requests_to_approve_from.each do |requester|
        json.set! requester.id do 
            json.extract! requester, :id, :first_name, :surname
        end 
    end
end 
json.requests_to_approve  do
    @user.requests_to_approve.each do |request|
        json.set! request.started_by_user_id do 
            json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
        end
    end
end 
json.friendships do 
    @user.friendships.each do |friendship|
        json.set! friendship.friends_with_user_id do 
            json.extract! friendship, :id, :user_id, :friends_with_user_id
        end 
    end 
end 
json.friendships_repeated do 
    @user.friendships_repeated.each do |friendship|
        json.set! friendship.user_id do 
            json.extract! friendship, :id, :user_id, :friends_with_user_id
        end 
    end 
end 
json.friends do 
    @user.friends.each do |friend|
        json.set! friend.id do 
            json.extract! friend, :id, :first_name, :surname
            if friend.profile_pic.attached?
                json.profileUrl url_for(friend.profile_pic) 
            end 
        end 
    end 
end 