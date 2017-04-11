class SensorStation < OpenStruct

  def self.all_stations
    UsgsService.new.water_parameters[:value][:timeSeries].map do |station|
      SensorStation.new(station)
    end
  end
end
