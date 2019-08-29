class LoginController < ApplicationController
  skip_before_action :authorized, only: :create

  def create
    user = User.find_by(username: params[:username])
    is_authenticated = user.authenticate(params[:password]) if user
    if is_authenticated
      render json: { token: encode_token(user) }
    else
      render json: { errors: ["Wrong username or password"] }, status: :unprocessable_entity
    end
  end

  def profile
    render json: user
  end
end
