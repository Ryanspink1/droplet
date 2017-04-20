require 'rails_helper'

describe 'a guest' do
  describe 'cannot visit the dashboard page' do
    it 'and will be redirected to the root path' do
      visit '/dashboard'
      expect(current_path).to eq('/')
    end
  end
end
