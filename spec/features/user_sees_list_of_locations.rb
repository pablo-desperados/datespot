require 'rails_helper'

feature "visitor sees a list of locations" do
  scenario "sees a list of locations" do
    paramout = Location.create(name: 'The Paramount', address: '44 Charles St.', city: 'Boston', state: 'MA', zip: '02114')
    top_of_the_hub = Location.create(name: 'Top of the Hub', address: '800 Boylston St.', city: 'Boston', state: 'MA', zip: '02199')

    visit locations_path

    expect(page).to have_content "The Paramount"
    expect(page).to have_content "Top of the Hub"

  end
end
