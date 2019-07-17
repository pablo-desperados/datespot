require 'rails_helper'

RSpec.describe User, type: :model do

  it { should have_valid(:first_name).when("Pablo") }
  it { should_not have_valid(:first_name).when(nil,"") }

  it { should have_valid(:last_name).when("Mujica") }
  it { should_not have_valid(:last_name).when(nil,"") }

  it { should have_valid(:email).when("pablo@mail.com") }
  it { should_not have_valid(:email).when(nil,"") }

  it { should have_valid(:password).when("1234567") }
  it { should_not have_valid(:email).when(nil,"") }

end
