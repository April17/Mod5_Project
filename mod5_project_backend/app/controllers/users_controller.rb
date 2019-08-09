class UsersController < ApplicationController
  skip_before_action :authorized

  def profile
    # user_atm = User.first
    # debugger
    user = User.find_by(username: user_atm)
    render json: user, include: "**"
  end
end
