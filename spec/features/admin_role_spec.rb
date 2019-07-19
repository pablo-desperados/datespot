require 'rails_helper'

describe "#admin?" do
  it "is not an admin if the admin column is false" do
    user = FactoryBot.create(:user, first_name: "Tom", last_name: "Adams", admin: false)
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the admin column is true" do
    user = FactoryBot.create(:user, first_name: "Tom", last_name: "Adams", admin: true)
    expect(user.admin?).to eq(true)
  end
end
