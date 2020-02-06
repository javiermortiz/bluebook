@posts.each do |post|
    json.set! post.for_user_id do 
        json.set! post.id do
            json.extract! post, :id, :body, :author_id, :for_user_id
        end 
    end 
end 