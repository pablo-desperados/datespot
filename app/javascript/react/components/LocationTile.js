import React from 'react'
import { Link } from 'react-router-dom'

const LocationTile = props => {

  return(
    <div>
      <h5><Link to={`/locations/${props.id}`}>{props.name}</Link></h5>
    </div>
  )
}

export default LocationTile
