class Api::PostsController < ApplicationController 
    def index
        @received_posts = User.find(params[:user_id]).received_posts
    end

    def show
        
    end 

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else  
            render json: @post.errors.full_messages, status: 422
        end 
    end 

    def update

    end 

    def destroy
        @post = Post.find(params[:id])
        if @post.destroy 
            render :show 
        else  
            render json: @post.errors.full_messages, status: 422
        end 
    end

    private
    def post_params
        params.require(:post).permit(:body, :author_id, :for_user_id)
    end 
end 