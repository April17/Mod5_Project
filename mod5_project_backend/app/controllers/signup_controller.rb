class SignupController < ApplicationController

  def create
    if Utility.double_chack_passowrd(params[:password], params[:confirmPassword])
      username = params[:inviteToggle] + params[:username]
      name = [params[:firstName], params[:lastName]].join(" ")
      if username[0..2] == "emp"
        manager = Manager.find_by(username: params[:inviteCode])
        new_user = Employee.create(name: name, username: username, password: params[:password], manager: manager)
      elsif username[0..2] == "mag"
        new_user = Manager.create(name: name, username: username, password: params[:password])
      end
      render json: new_user
      return
    end
    render json: {error: "password do not match"}
  end


end
