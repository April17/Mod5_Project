class UsersController < ApplicationController
  skip_before_action :authorized

  def create
    user = User.create(user_params)
    if user.valid?
      render json: { success: "Thank you for signup" }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def profile
    user = User.find_by(username: user_atm)
    render json: user, include: "**"
  end
end

private

def user_params
  params.permit(:username, :name, :password, :password_confirmation)
end
