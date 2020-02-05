json.request do 
    json.set! json.extract! @friendship_request, :id, :status, :started_by_user_id, :waiting_for_user_id
end 

json.users do 
    json.set! @user1.id do 
        json.extract! @user1, :id, :first_name, :surname, :email, :birthday, :gender
        if @user1.profile_pic.attached?
            json.profileUrl url_for(@user1.profile_pic)
        end 
        if @user1.cover_pic.attached?
            json.coverUrl url_for(@user1.cover_pic)
        end
        json.authoredPosts @user1.authored_posts.ids
        json.receivedPosts @user1.received_posts.ids 
        json.friends_with @user1.friends.ids 
        json.initiated_requests_with @user1.initiated_requests_with.ids
        json.initiated_requests do
            @user1.initiated_requests.each do |request|
                json.set! request.waiting_for_user_id do 
                    json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
                end
            end 
        end 
        json.requests_to_approve_from @user1.requests_to_approve_from.ids 
        json.requests_to_approve  do
            @user1.requests_to_approve.each do |request|
                json.set! request.started_by_user_id do 
                    json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
                end
            end
        end 
        json.friendships do 
            @user1.friendships.each do |friendship|
                json.set! friendship.friends_with_user_id do 
                    json.extract! friendship, :id, :user_id, :friends_with_user_id
                end 
            end 
        end 
        json.friendships_repeated do 
            @user1.friendships_repeated.each do |friendship|
                json.set! friendship.user_id do 
                    json.extract! friendship, :id, :user_id, :friends_with_user_id
                end 
            end 
        end 
    end 

    json.set! @user2.id do 
        json.extract! @user2, :id, :first_name, :surname, :email, :birthday, :gender
        if @user2.profile_pic.attached?
            json.profileUrl url_for(@user2.profile_pic)   
        end 
        if @user2.cover_pic.attached?
            json.coverUrl url_for(@user2.cover_pic)
        end
        json.authoredPosts @user2.authored_posts.ids
        json.receivedPosts @user2.received_posts.ids 
        json.friends_with @user2.friends.ids 
        json.initiated_requests_with @user2.initiated_requests_with.ids
        json.initiated_requests do
            @user2.initiated_requests.each do |request|
                json.set! request.waiting_for_user_id do 
                    json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
                end
            end 
        end 
        json.requests_to_approve_from @user2.requests_to_approve_from.ids 
        json.requests_to_approve  do
            @user2.requests_to_approve.each do |request|
                json.set! request.started_by_user_id do 
                    json.extract! request, :id, :status, :started_by_user_id, :waiting_for_user_id
                end
            end
        end 
        json.friendships do 
            @user2.friendships.each do |friendship|
                json.set! friendship.friends_with_user_id do 
                    json.extract! friendship, :id, :user_id, :friends_with_user_id
                end 
            end 
        end 
        json.friendships_repeated do 
            @user2.friendships_repeated.each do |friendship|
                json.set! friendship.user_id do 
                    json.extract! friendship, :id, :user_id, :friends_with_user_id
                end 
            end 
        end  
    end 
end 