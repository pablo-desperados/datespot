import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ShowTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'
import {BrowserRouter, Route} from 'react-router-dom'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation: "",
      reviews: [],
      error_message: ""
    }
    this.addReview = this.addReview.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateRatingFetch = this.updateRatingFetch.bind(this)
  }

  handleClick(event){
    if (event.target.className.includes("circle-up")) {
      this.updateRatingFetch(+1)
    } else {
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
    .then((response) =>{
      if (response.error_message.length > 0) {
        this.setState({ error_message: response.error_message })
      } else {
        this.setState({ chosenLocation: response.location })
      }
    })
    .catch((error) =>
      console.error(`Error in fetch: ${error.message}`)
    );
  }

  componentDidMount(){
    fetch(`/api/v1/locations/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response =>{
      this.setState({chosenLocation: response.location, reviews: response.reviews})
    })
  }


  addReview(item){
    fetch(`/api/v1/locations/${this.props.match.params.id}/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(item),
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
    .then((responseBody) => {
      let currentReviews = this.state.reviews
      this.setState({ reviews: currentReviews.concat(responseBody) })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
      <h3>{this.state.error_message}</h3>
        <div>
          <ShowTile
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
          <h3>Add a new review here:</h3>
          <ReviewFormContainer
            addReview={this.addReview}
          />
        </div>
        <div>
          {reviews}
        </div>
      </div>
    )
  }
}

export default ShowLocationContainer;
