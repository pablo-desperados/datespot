require 'rails_helper'
require 'shared_contexts'

RSpec.describe Api::V1::RatingsController, type: :controller do
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
      category: "Casual",
      user_id: test_user.id
  )}

  it "should update ratings of location by 1 or -1" do
    sign_in(test_user)
    get :create, params: {location_id: test_location.id , _json: 1}
    returned_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json["location"]["rating"]).to eq(1)
    expect(returned_json["location"]["name"]).to eq( "Top of the state")
    expect(returned_json["location"]["category"]).to eq( "Casual")
  end

  it "should not update rating if user has already rated location" do
    sign_in(test_user)
    get :create, params: { location_id: test_location.id , _json: 1 }
    get :create, params: { location_id: test_location.id , _json: 1 }
    returned_json = JSON.parse(response.body)
    expect(response.status).to eq 200
    expect(response.content_type).to eq("application/json")

    expect(returned_json["error_message"]).to eq("You have already voted for this location!")
    expect(returned_json["location"]["rating"]).to_not eq(2)
  end
end
