require "rails_helper"
require 'shared_contexts'


RSpec.describe Api::V1::LocationsController, type: :controller do
  let!(:test_user){User.create(
    first_name: "Pablo",
    last_name: "Mujica",
    email: "me@email.com",
    password: "123456",
    admin: true
    )}

  let!(:test_location){Location.create(
      name: "Top of the state",
      address: "123 address st",
      city: "Boston",
      state: "MA",
      zip: "02112",
      user_id: test_user.id
  )}


  it "Should resturn test_location" do
     sign_in(test_user)
    get :show, params: {id: test_location.id}
    returned_json = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json.length).to eq 2
    expect(returned_json["location"]["name"]).to eq "Top of the state"
    expect(returned_json["location"]["address"]).to eq "123 address st"
  end

  it "Should delete the chosen location" do

  it "should update ratings of location by 1 or -1" do
    sign_in(test_user)
    get :update, params: {id: test_location.id , _json: 1}
    returned_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json["location"]["rating"]).to eq(1)
    expect(returned_json["location"]["name"]).to eq( "Top of the state")
  end
end
