require 'rails_helper'

  describe 'station show page' do
    it 'shows data for each station' do

      user = User.create(name:"Ryan")

      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

      visit('/stations/02397530')

      expect(page).to have_content("Select number of days to see info for:")
    end
  end
