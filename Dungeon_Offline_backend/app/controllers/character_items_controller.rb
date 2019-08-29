class CharacterItemsController < ApplicationController
  def create
    current_monster = Monster.find_by(id: params[:monster_id])
    current_character = Character.find_by(id: params[:character_id])
    rarity = Utility.rarity_generator
    items = current_monster.items.select{|item| item.rarity == rarity}
    if items != []
      item = items.sample
      CharacterItem.create(character: current_character, item: item)
      render json: current_character.unique_character_owned_items
    else
      render json: {message: "no drop"}
    end
  end
  def destroy
    current_character = Character.find_by(id: params[:character_id])
    current_CI = current_character.character_items.find{|item| item.item_id == params[:item_id]}
    current_CI.destroy
    render json: current_character.unique_character_owned_items
  end
end
