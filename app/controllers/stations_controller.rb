class StationsController < ApplicationController
  before_action :authorize!

  def index
    # byebug
    @stations = SensorStation.stations#(params[:state])
    # @presenter = Presenter.new
  end
end
