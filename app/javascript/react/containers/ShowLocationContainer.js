import React from 'react'
import ShowTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'
import {BrowserRouter, Route} from 'react-router-dom'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation: "",
      reviews: []
    }
    this.handleDeleteLocation = this.handleDeleteLocation.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateRatingFetch = this.updateRatingFetch.bind(this)
  }

  handleClick(event){
    if (event.target.className.includes("circle-up")) {
      this.updateRatingFetch(+1)
    }else {
      this.updateRatingFetch(-1)
    }
  }

  updateRatingFetch(value){
    fetch(`/api/v1/locations/${this.props.match.params.id}`,{
      crendetials: 'same-origin',
      method: 'PATCH',
      body: value,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response=>{
      this.setState({chosenLocation: response.location})
    })
    .catch(error =>
      console.error(`Error in fetch: ${error.message}`
    ));
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
            handleClick={this.handleClick}
            name={this.state.chosenLocation.name}
            address={this.state.chosenLocation.address}
            city={this.state.chosenLocation.city}
            state={this.state.chosenLocation.state}
            zip={this.state.chosenLocation.zip}
            rating={this.state.chosenLocation.rating}
          />
        </div>

        <div>
          <a href={`/locations/${this.state.chosenLocation.id}/edit`} >Edit</a>
          <button onClick={this.handleDeleteLocation}>Delete</button>
        </div>

        <div>
          {reviews}
        </div>
      </div>
    )
  }
}

export default ShowLocationContainer
