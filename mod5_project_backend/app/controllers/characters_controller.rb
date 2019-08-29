class CharactersController < ApplicationController
  # skip_before_action :authorized

  def show
    character = Character.find_by(id: params[:id])
    render json: character, include: "**",  character_id: character.id
  end

  def update
    character = Character.find_by(id: params[:id])
    character.update(character_params)
    # render json: character, include: "**"
  end

  def create
    user = User.find_by(username: user_atm)
    character = Character.new(character_params)
    character.user = user
    character.hp = character.max_hp
    if character.save
      CharacterItem.create(character: character, item_id: 3)
      user = character.user
      render json: user, include: "**"
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def destroy
    character = Character.find_by(id: params[:id])
    if character.destroy
      user = User.find_by(username: user_atm)
      render json: user, include: "**"
    else
      render json: { errors: "Delete Fail"}
    end
  end

end
private

def character_params
  params.require(:character).permit(:name, :level, :exp, :exp_next_level, :max_hp, :hp, :atk, :def, :x, :y)
end
