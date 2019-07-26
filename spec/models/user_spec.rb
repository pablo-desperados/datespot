require 'rails_helper'

RSpec.describe User, type: :model do

  it { should have_many(:reviews) }
  it { should have_many(:locations) }
  it { should have_many(:ratings) }

  it { should have_valid(:first_name).when("Pablo") }
  it { should_not have_valid(:first_name).when(nil,"") }

  it { should have_valid(:last_name).when("Mujica") }
  it { should_not have_valid(:last_name).when(nil,"") }

  it { should have_valid(:email).when("pablo@mail.com") }
  it { should_not have_valid(:email).when(nil,"") }

  it { should have_valid(:password).when("1234567") }
  it { should_not have_valid(:email).when(nil,"") }

  it { should have_valid(:profile_photo).when("/spec/support/images/watermelon.jpeg") }
  it { should have_valid(:profile_photo).when(User.create.profile_photo)}

  it "New user should not be an admin" do
    user = User.new
    expect(user.admin?).to eq(false)
  end

  it "Admin user should be an admin" do
    user = User.new
    user.admin = true
    expect(user.admin?).to eq(true)
  end

end
