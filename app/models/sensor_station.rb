class SensorStation < OpenStruct

  def self.stations#(state)
    UsgsService.new.water_parameters[:value][:timeSeries].map do |station|
      SensorStation.new(station)
    end
  end
end
