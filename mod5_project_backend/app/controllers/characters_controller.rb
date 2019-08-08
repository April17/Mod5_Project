class CharactersController < ApplicationController
  def show
    current_character = Character.first
    render json: current_character
  end
end
