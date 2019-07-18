import React from 'react'
import ShowLocationTile from '../components/ShowTile'
import ShowReviewTile from '../components/ShowReviewTile'

class ShowLocationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation : "",
      reviews : []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/locations/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response =>{
      this.setState({chosenLocation: response.location, reviews: response.reviews})
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

export default ShowLocationContainer;
