import React from 'react'
import { Link } from 'react-router-dom'

const LocationTile = props => {

  return(
    <div className="location-box callout link">
      <h5>
        <Link to={`/locations/${props.id}`}>{props.name}</Link>
      </h5>

      <p>Rating: {props.rating}</p>
      <p>Category: {props.category}</p>
    </div>
  )
}

export default LocationTile
