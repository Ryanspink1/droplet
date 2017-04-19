require 'rails_helper'
require 'spec_helper'

describe 'station index page' do
  it 'shows list of stations based on params selected', js: true do
    user = User.create(name:"Ryan")

    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    visit '/stations'

    click_button("Search")

    wait_for_ajax

    expect(page).to have_css('.entry')

    expect(page).to have_content("CHATTAHOOCHEE R .36 MI DS WFG DAM NR FT GAINES, GA")
    expect(page).to have_content("BEAR CREEK NEAR RED BAY, AL.")
    expect(page).to_not have_content("BIRMINGHAM, AL.")


  end
end
