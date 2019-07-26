require 'rails_helper'

feature 'user edits a location', %Q{
  As a signed in user
  I want to edit a location
  So that I can update the locations database
} do

  scenario 'signed in user edits a location successfully' do
    user = User.create(
      first_name: "Boris",
      last_name: "Johnson",
      email: "jsmith@email.com",
      password: "password")

    location = Location.create(
      name: "Top of the state",
      address: "123 address st",
      city: "Boston",
      state: "MA",
      zip: "02112",
      category: "Casual",
      user_id: user.id
    )

    sign_in_as(user)

    click_link 'Locations'
    visit `/location/${location.id}`

    visit edit_location_path(location.id)

    select 'Casual', from: 'Category:'
    fill_in 'Location Name', with: 'Chipotle'
    fill_in 'Address', with: 'Summer St'
    fill_in 'City', with: 'Cambridge'
    fill_in 'State', with: 'OH'
    fill_in 'Zip', with: '02171'

    click_button 'Update Location'

    expect(page).to have_content('Location was successfully updated.')
  end
end
