class WorldsController < ApplicationController
  def show
    current_world = World.find_by(id: params[:id])
    render json: current_world, include: "**"
  end
end
