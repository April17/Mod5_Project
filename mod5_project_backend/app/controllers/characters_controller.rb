class CharactersController < ApplicationController
  skip_before_action :authorized

  def show
    character = Character.find_by(id: params[:id])
    render json: character, include: "**"
  end
  def update
    # debugger
    character = Character.find_by(id: params[:id])
    character.update(character_params)
    render json: character, include: "**"
  end

end
private

def character_params
  params.require(:character).permit(:x, :y, :hp)
end
