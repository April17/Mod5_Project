class ItemsController < ApplicationController
  # skip_before_action :authorized
  def show
    item = Item.find_by(id: params[:id])
    render json: item, include: "**"
  end
end
