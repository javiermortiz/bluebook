@friendships.each do |friendship|
    json.set! friendship.id do
        json.extract! friendship, :id, :user_id, :friends_with_user_id
    end 
end 