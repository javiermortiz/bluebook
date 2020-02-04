class Api::FriendshipRequestsController < ApplicationController

    def create
        @friendship_request = FriendshipRequest.new(friendship_request_params)
        if @friendship_request.save
            render :show
        else  
            render json: @friendship_request.errors.full_messages, status: 401
        end 
    end 

    def index
        @friendship_requests = FriendshipRequest.all 
    end 

    def destroy
        @friendship_request = FriendshipRequest.find(params[:id])
        if @friendship_request.destroy
            render :show
        else  
            render json: @friendship_request.errors.full_messages, status: 401
        end 
    end 

    private
    def friendship_request_params
        params.require(:friendship_request)
            .permit(:status, :started_by_user_id, :waiting_for_user_id)
    end
end 