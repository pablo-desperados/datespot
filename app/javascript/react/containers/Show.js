import React from 'react'
import ShowLocationTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation : "",
      reviews : [],
      users: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/locations/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response =>{
      this.setState({chosenLocation: response.location, reviews: response.reviews, users: response.users})
    })
  }

  render(){
    let reviews = this.state.reviews.map(review => {
      let user = this.state.users.find(user=> user.id === review.id)
      return(
        <ShowReviewTile
          key={review.id}
          user={review.user_id}
          title={review.title}
          body={review.body}
          user = {user}
        />
      )
    })

    return(
      <div>
        <div>
          <ShowLocationTile
            name={this.state.chosenLocation.name}
            address={this.state.chosenLocation.address}
            city={this.state.chosenLocation.city}
            state={this.state.chosenLocation.state}
            zip={this.state.chosenLocation.zip}
          />
        </div>

        <div>
          {reviews}
        </div>
      </div>
    )
  }
}




export default Show
