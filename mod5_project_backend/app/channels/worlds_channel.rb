class WorldsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "worlds_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
