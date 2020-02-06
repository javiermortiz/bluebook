class Api::PostsController < ApplicationController 
    def index
        p params
        @posts = User.find(params[:user_id]).received_posts
    end

    def show

    end 

    def create

    end 

    def update

    end 

    def destroy

    end
end 