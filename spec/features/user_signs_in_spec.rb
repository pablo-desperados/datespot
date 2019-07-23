require 'rails_helper'

feature 'user signs in', %Q{
  As a signed up user
  I want to sign in
  So that I can regain access to my account
} do

  # Acceptance Criteria:
  # * If I have created an account, I should be able to sign in
  # * I must login with my email and password for my account
  # * If the email or password is invalid I should see an error message

  scenario 'specify valid credentials' do
    user = User.create(
      first_name: "John",
      last_name: "Smith",
      email: "jsmith@email.com",
      password: "password")

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content('Signed in successfully')
    expect(page).to have_current_path(locations_path)
    expect(page).to have_content('Sign Out')
  end

  scenario 'specify invalid credentials' do
    visit new_user_session_path

    click_button 'Log in'
    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Sign Out')

  end
end
