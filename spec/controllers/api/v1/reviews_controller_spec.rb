require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    let!(:test_user){User.create(
      first_name: "Pablo",
      last_name: "Mujica",
      email: "me@email.com",
      password: "123456",
      profile_photo: "/spec/support/images/watermelon.jpeg"
      )}

    before do
      sign_in test_user
    end

    let!(:test_location){Location.create(
        name: "Top of the state",
        address: "123 address st",
        city: "Boston",
        state: "MA",
        zip: "02112",
        category: "Casual",
        user_id: test_user.id
    )}

    let!(:review_hash){
      {
        title: "This place was aight I guess",
        body: "It was mediocre at best. I may or may not visit again.",
        user_id: test_user.id
      }
    }

    it "adds a new review the database" do
      expect{
        post :create,
        params: {
          location_id: test_location.id,
          review: review_hash
        }
      }.to change { Review.count }.by 1
    end
  end

end
