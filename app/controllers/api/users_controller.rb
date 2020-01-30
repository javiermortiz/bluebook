class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render '/api/users/show'
        else  
            # render json: ['signup', 'Invalid email/password'], status: 401
            render json: @user.errors.full_messages, status: 401
        end 
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