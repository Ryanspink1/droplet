class StationsController < ApplicationController
  before_action :authorize!

  def index
    # byebug
    @stations = SensorStation.stations
  end
end
