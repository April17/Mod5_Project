class WorldsController < ApplicationController
  # skip_before_action :authorized

  def create
    current_character = Character.find_by(id: params[:character_id])
    if current_character.world
      current_world = current_character.world
    elsif !current_character.world
      current_world = World.all.find{|world| world.current_user_count < world.capacity}
      if current_world
        WorldCharacter.create(world: current_world, character: current_character)
      else
        current_world = World.create(name: "Playground")
        Monster.all.each {|monster| WorldMonster.create(world: current_world, monster: monster)}
        WorldCharacter.create(world: current_world, character: current_character)
      end
    end
    current_world.current_user_count = current_world.world_characters.size
    current_world.save
    current_world.reload
    render json: current_world, include: "**"
  end

  def show
    current_world = World.find_by(id: params[:id])
    render json: current_world, include: "**"
  end
end
