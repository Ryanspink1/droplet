require 'rails_helper'

describe StationsHelper do
  let(:extended_class) { Class.new { extend StationsHelper } }
  let(:including_class) { Class.new { include StationsHelper } }

  it "contains the state information" do
    expect(us_states.first).to eq(['Alabama', 'AL'])
    expect(us_states.count).to eq(52)
  end
end
