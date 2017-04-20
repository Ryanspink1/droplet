require 'rails_helper'

RSpec.feature "user logs in" do
  scenario "using google oauth2" do
    stub_omniauth
    visit root_path
    expect(page).to have_link("Login")
    click_link "Login"
    expect(current_path).to eq('/dashboard')
    expect(page).to have_content("Ryan Spink")
    expect(page).to have_link("Logout")
  end
end

RSpec.feature "user logs out" do
  scenario "they are redirected to the home page" do
    stub_omniauth
    visit root_path
    expect(page).to have_link("Login")
    click_link "Login"
    expect(page).to have_content("Ryan Spink")
    expect(page).to have_link("Logout")
    click_link "Logout"
    expect(current_path).to eq('/')
  end
end
