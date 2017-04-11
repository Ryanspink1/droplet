class UsgsService
  attr_reader :connection

  def initialize
    @connection = Faraday.new("https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=co&parameterCd=00010,00400&siteStatus=all")
  end


  def water_parameters
    parse(@connection.get)
  end


private

  def parse(response)
    JSON.parse(response.body, symbolize_names: true)
  end
end
