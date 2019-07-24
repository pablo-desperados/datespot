require 'rails_helper'

feature "Location picture" do
  scenario "user uploads a locations picture" do
    user = User.create(
      first_name: "John",
      last_name: "Smith",
      email: "jsmith@email.com",
      password: "password")

    sign_in_as(user)

    visit new_location_path

    fill_in 'Location Name', with: 'Chipotle'
    fill_in 'Address', with: 'Summer St'
    fill_in 'City', with: 'Boston'
    fill_in 'State', with: 'MA'
    fill_in 'Zip Code', with: '02111'
    attach_file :location_picture, "#{Rails.root}/spec/support/images/watermelon.jpeg"

    click_button 'Create Location'

    expect(page).to have_content('New Location Added')
    expect(page).to have_css("img[src*='watermelon.jpeg']")
  end
end
