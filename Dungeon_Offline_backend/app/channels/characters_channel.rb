class CharactersChannel < ApplicationCable::Channel
  def subscribed
    world = World.find(params[:world])
    stream_for world
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
