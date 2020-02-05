class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            render :show
        else  
            render json: @friendship.errors.full_messages, status: 401
        end 
    end 

    def index
        @friendships = Friendship.all 
    end 

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship.destroy
            @user1 = User.find(@friendship.user_id)
            @user2 = User.find(@friendship.friends_with_user_id)
            render :show
        else  
            render json: @friendship.errors.full_messages, status: 401
        end 
    end 

    private
    def friendship_params
        params.require(:friendship)
            .permit(:user_id, :friends_with_user_id)
    end
end 