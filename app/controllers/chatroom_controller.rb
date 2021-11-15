class ChatroomController < ApplicationController
  before_action :require_user

  def index
    @message = Message.new
    # @messages = Message.all.reject { |i| i.id < Message.last.id - 100 }
    # rubier way of doing it, would select the most recent 100 messages
    @messages = Message.custom_display
  end
end
