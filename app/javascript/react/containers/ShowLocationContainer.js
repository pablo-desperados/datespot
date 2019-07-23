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
          <a href={`/locations/${this.state.chosenLocation.id}/edit`} >Edit</a>
        </div>

        <div>
          {reviews}
        </div>
      </div>
    )
  }
}

export default ShowLocationContainer;
