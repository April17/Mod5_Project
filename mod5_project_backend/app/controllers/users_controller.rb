class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def show
    user = User.find_by(id: params[:id])
    render json: user, include: "**"
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: { success: "Thank you for signup" }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def update
    user = User.find_by(username: user_atm)
    if user.update(user_params)
      render json: user, include: "**"
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def profile
    user = User.find_by(username: user_atm)
    render json: user, include: "**"
  end

  def destroy
    user = User.find_by(username: user_atm)
    if user.destroy
      render json: { success: "Delete Successful"}
    else
      render json: { errors: "Delete Fail"}
    end
  end
end

private

def user_params
  params.permit(:username, :name, :password, :password_confirmation)
end
