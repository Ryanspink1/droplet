class StationsController < ApplicationController
  before_action :authorize!

  def index
    @stations = SensorStation.stations#(params[:state])
  end

  def show
  end
end
