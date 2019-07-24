import React from 'react'
import ShowTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation: "",
      reviews: []
    }
    this.handleDeleteLocation = this.handleDeleteLocation.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/locations/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({chosenLocation: response.location, reviews: response.reviews})
    })
  }

  handleDeleteLocation(event) {
    event.preventDefault()
    let locationId = this.state.chosenLocation.id
    fetch(`/api/v1/locations/${locationId}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(remainingLocations => {
      this.props.history.push(`/locations`, { locations: remainingLocations } )
    })
  }

  render(){

    let reviews = this.state.reviews.map(review => {
      return(
        <ShowReviewTile
          key={review.id}
          user={review.user_id}
          title={review.title}
          body={review.body}
        />
      )
    })

    return(
      <div>
        <div>
          <ShowTile
            key={this.state.chosenLocation.id}
            name={this.state.chosenLocation.name}
            address={this.state.chosenLocation.address}
            city={this.state.chosenLocation.city}
            state={this.state.chosenLocation.state}
            zip={this.state.chosenLocation.zip}
          />
        </div>

        <div>
          <a href={`/locations/${this.state.chosenLocation.id}/edit`} >Edit | </a>
          <button onClick={this.handleDeleteLocation}>ANNIHILATE</button>
        </div>

        <div>
          {reviews}
        </div>
      </div>
    )
  }
}

export default ShowLocationContainer
