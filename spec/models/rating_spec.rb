require 'rails_helper'

RSpec.describe Rating, type: :model do

  it { should belong_to(:user) }
  it { should belong_to(:location) }

  it { should have_valid(:rating).when(1) }
  it { should_not have_valid(:rating).when(nil, "") }

end
