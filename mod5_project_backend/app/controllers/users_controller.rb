class UsersController < ApplicationController
  def show
    user_atm = User.find_by(id: params[:id])
    render json: user_atm, include: "**"
  end
end
