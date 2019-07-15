require 'rails_helper'

RSpec.describe Location, type: :model do
  binding.pry
  it { should belong_to(:user) }

  it { should have_valid(:user).when(User.new) }
  it { should_not have_valid(:user).when(nil) }

  it { should have_valid(:name).when('Jo Ann Billion Dillion') }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:address).when('77 summer st') }
  it { should_not have_valid(:address).when(nil, "") }

  it { should have_valid(:city).when('Boston') }
  it { should_not have_valid(:city).when(nil, "") }

  it { should have_valid(:state).when('MA') }
  it { should_not have_valid(:state).when(nil, "") }

  it { should have_valid(:zip).when('02420') }
  it { should_not have_valid(:zip).when(nil, "") }

end
