require 'rails_helper'

RSpec.describe Review, type: :model do


  it { should belong_to(:location) }
  it { should belong_to(:user) }

  it { should have_valid(:title).when(User.new) }
  it { should_not have_valid(:body).when(nil) }

  it { should have_valid(:body).when('It sucked!') }
  it { should_not have_valid(:body).when(nil, "") }

end
