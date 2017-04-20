require 'rails_helper'

  describe 'station show page' do
    it 'shows data for each station', js: true do

      user = User.create(name:"Ryan")

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit('/stations/02397530')

      # expect(page).to have_content("Select number of days prior of data:")

      # fill_in "days", with: "1"

      # click_button "Search"

      # wait_for_ajax

      expect(page).to have_css('.temp')
      expect(page).to have_css('.pH')
      expect(page).to have_css('.dO')
      expect(page).to have_css('.cond')
      expect(page).to_not have_css('.dis')

    end
  end
