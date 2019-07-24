import React from 'react';
import { Link } from 'react-router-dom'
import LocationTile from '../components/LocationTile'

class LocationsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locations: []
    };
  };

  componentDidMount() {
    console.log("amidoingthisright?")
    fetch('/api/v1/locations')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {

      this.setState({ locations: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let locations = this.state.locations.map(location => {
      return(
          <LocationTile
            key={location.id}
            id={location.id}
            name={location.name}
          />
      )
    })

    return(
      <div className="callout">
        <h1>DateSpots!</h1>

        <a href="/locations/new">Submit a New Location</a>

          <div className="wrapper">
            {locations}
          </div>

      </div>
    )
  }
}

export default LocationsContainer;
