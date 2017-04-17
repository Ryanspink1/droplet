class SensorStation < OpenStruct

  def self.stations
    UsgsService.new.water_parameters[:value][:timeSeries].map do |station|
      SensorStation.new(station)
    end
  end
end
