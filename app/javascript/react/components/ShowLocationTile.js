import React from 'react'

const ShowLocationTile = props => {

  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip

  return(
    <div>
      <h1>{name}</h1>
      <p>{address}, {city}, {state}, {zip}</p>
    </div>

  )
}

export default ShowLocationTile