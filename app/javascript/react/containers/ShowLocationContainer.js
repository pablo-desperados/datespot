import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ShownTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation: "",
      reviews: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/locations/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response =>{
      this.setState({chosenLocation: response.location, reviews: response.reviews})
    })
  }


  addReview(){
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(newReviewObject),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'applpication/json'
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
      this.setState({ reviews: currentReviews.concat(body) })
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
<<<<<<< HEAD
        <ShowLocationTile
          name={this.state.chosenLocation.name}
          address={this.state.chosenLocation.address}
          city={this.state.chosenLocation.city}
          state={this.state.chosenLocation.state}
          zip={this.state.chosenLocation.zip}
        />
        <h3>Add a new review here:</h3>
        <ReviewFormContainer
          addReview={this.addReview}
        />
=======
        <div>
          <ShowTile
            name={this.state.chosenLocation.name}
            address={this.state.chosenLocation.address}
            city={this.state.chosenLocation.city}
            state={this.state.chosenLocation.state}
            zip={this.state.chosenLocation.zip}
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
>>>>>>> 07330946fddefdfe927fd8ccc74f7db1c6a67ea8
      </div>
    )
  }
}

export default ShowLocationContainer;
