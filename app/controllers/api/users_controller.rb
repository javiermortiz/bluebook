class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            # @user.profile_pic.attach(
            #     io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/default_profile.png"), 
            #     filename: "default_profile.png"
            # )
            # @user.cover_pic.attach(
            #     io: File.open("/Users/ortiz-garcia/desktop/bluebook-images/default_cover.jpg"), 
            #     filename: "default_cover.jpg"
            # )
            render '/api/users/show'
        else  
            # render json: ['signup', 'Invalid email/password'], status: 401
            render json: @user.errors.full_messages, status: 401
        end 
    end 

    def show
        @user = User.find(params[:id])
    end 

    private
    def user_params
        params.require(:user).permit(
            :first_name, 
            :surname, 
            :email, 
            :password,
            :birthday,
            :gender
        )
    end 
end 