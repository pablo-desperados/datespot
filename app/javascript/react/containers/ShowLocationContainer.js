import React from 'react'
import ReviewFormContainer from './ReviewFormContainer'
import ShowTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation: "",
      reviews: []
    }
    this.addReview = this.addReview.bind(this)
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
      </div>
    )
  }
}

export default ShowLocationContainer;
