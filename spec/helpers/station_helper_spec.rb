require 'rails_helper'

describe StationsHelper do
  let(:extended_class) { Class.new { extend StationsHelper } }
  let(:including_class) { Class.new { include StationsHelper } }

  it "contains the state information" do
    expect(us_states.first).to eq(['Alabama', 'AL'])
    expect(us_states.count).to eq(52)
  end

  it "contains the water_parameters information" do
    expect(water_parameters.first).to eq(['Temperature', '00010'])
    expect(water_parameters.count).to eq(5)

    expect(water_parameters.last).to eq(['Discharge', '00060'])
    expect(water_parameters.last).to_not eq(['pH', '00400'])
  end

  it "contains the siteType information" do
    expect(siteType.first).to eq(['All', 'ALL'])
    expect(siteType.last).to eq(['Well', 'GW'])

    expect(siteType.count).to eq(7)
  end

end
