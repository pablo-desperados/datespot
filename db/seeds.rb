turtle = File.open(File.join(Rails.root, '/public/images_seed/turtle.jpeg'))
paramount = File.open(File.join(Rails.root, '/public/images_seed/download(37).jpg'))
hub = File.open(File.join(Rails.root, '/public/images_seed/top-hub.jpeg'))
user2 = File.open(File.join(Rails.root, '/public/images_seed/user2.jpeg'))
user1 = File.open(File.join(Rails.root, '/public/images_seed/user1.jpeg'))

User.create(first_name: 'Pablo', last_name: 'Mujica', email: 'pblmjc@gmail.com', password: '123123', admin: true, profile_photo: user1)
User.create(first_name: 'Jo', last_name: 'Dillion', email: 'jd@gmail.com', password: '123123', admin: false, profile_photo: user2)
Location.create(name: 'New England Aquarium', address: '1 Central Wharf', city: 'Boston', state: 'MA', zip: '02110', user_id: 1, rating: 99, location_picture: turtle, category:"Adventure")
Location.create(name: 'The Paramount', address: '44 Charles St.', city: 'Boston', state: 'MA', zip: '02114', user_id: 1, rating: 10, location_picture: paramount, category:"Fun")
Location.create(name: 'Top of the Hub', address: '800 Boylston St.', city: 'Boston', state: 'MA', zip: '02199', user_id: 2,  rating: -8, location_picture: hub, category:"Fun")
Review.create(title:"It was great!....but a penguin ate my ice cream", body: "Great date location, but the staff needs to put their animals on a leash or something. Otherwise very pleasent", user_id: 2, location_id: 1 )
Review.create(title:"I met my wife here!", body: "We were both looking at the jellyfishes", user_id: 2, location_id: 1 )
Review.create(title:"Horrible food!", body: "Never go there!", user_id: 2, location_id: 3 )
