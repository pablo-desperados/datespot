import React from 'react'
import ShowLocationTile from '../components/ShowTile'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenLocation : ""
    }
  }

  componentDidMount(){
    fetch(`/api/v1${this.props.location.pathname}`)
    .then(response => response.json())
    .then(response =>{
      this.setState({chosenLocation: response})
    })
  }

  render(){

    return(
      <div>
        <ShowLocationTile
          name={this.state.chosenLocation.name}
          address={this.state.chosenLocation.address}
          city={this.state.chosenLocation.city}
          state={this.state.chosenLocation.state}
          zip={this.state.chosenLocation.zip}
        />
      </div>
    )
  }
}




export default Show