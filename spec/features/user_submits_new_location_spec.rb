require 'rails_helper'

feature 'user submits a new location', %Q{
  As a signed in user
  I want to submit a new location
  To contribute to the locations database
} do

  scenario 'signed in user submits a new location successfully' do
    user = User.create(
      first_name: "John",
      last_name: "Smith",
      email: "jsmith@email.com",
      password: "password")

    visit new_user_session_path

    sign_in_as(user)

    click_link 'Locations'

    visit new_location_path

    select 'Casual', from: 'Category:'
    fill_in 'Location Name', with: 'Chipotle'
    fill_in 'Address', with: 'Summer St'
    fill_in 'City', with: 'Boston'
    fill_in 'State', with: 'MA'
    fill_in 'Zip Code', with: '02111'

    click_button 'Create Location'

    expect(page).to have_content('New Location Added')
  end

  scenario 'signed in user submits an invalid location' do
    user = User.create(
      first_name: "John",
      last_name: "Smith",
      email: "jsmith@email.com",
      password: "password")

    visit new_user_session_path

    sign_in_as(user)

    click_link 'Locations'

    visit new_location_path

    click_button 'Create Location'

    expect(page).to have_content('errors prohibited this event from being saved')
  end

  scenario 'visitor who is not a user tries to submit a location' do
    visit new_location_path
    expect(page).to have_content('You do not have access to this page.')
  end

end
