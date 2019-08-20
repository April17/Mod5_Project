class CharacterItemsController < ApplicationController
  def create
    # debugger
    current_monster = Monster.find_by(id: params[:monster_id])
    current_character = Character.find_by(id: params[:character_id])
    rarity = Utility.rarity_generator
    items = current_monster.items.select{|item| item.rarity == rarity}
    # debugger
    if items != []
      item = items.sample
      CharacterItem.create(character: current_character, item: item)
      render json: current_character.unique_character_owned_items
    else
      render json: {message: "no drop"}
    end
  end
end
