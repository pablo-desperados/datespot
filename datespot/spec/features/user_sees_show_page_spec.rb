require 'rails_helper'

feature 'User sees show page of date location', %Q{
  As a user
  I want to click on a date location
  So that I can details like the address
} do

  scenario "User sees details of a known location" do
    user = User.create!(email: "hello@email.com", password: "1234567890")
    location = Location.create!(name: "Capybara Bar", address: "899 Boylston Ave", city:"Houston", state: "Texas", zip: "00000", user_id: "#{user.id}")

    visit "/"
    click_link "Capybara Bar"
    save_and_open_page



    expect(page).to have_content("Capybara Bar")
    # expect(page).to have_content("Texas")
    # expect(page).to have_current_path(location)


  end



end
