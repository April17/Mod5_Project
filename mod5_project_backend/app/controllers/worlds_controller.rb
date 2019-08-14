class WorldsController < ApplicationController
  skip_before_action :authorized

  def show
    current_world = World.find_by(id: params[:id])
    render json: current_world, include: "**"
  end
end
