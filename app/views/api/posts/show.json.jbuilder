json.extract! @post, :id, :body, :author_id, :for_user_id, :created_at
json.author do 
    json.extract! @post.author, :first_name, :surname
    if @post.author.profile_pic.attached?
        json.profileUrl url_for(@post.author.profile_pic) 
    end 
end 
