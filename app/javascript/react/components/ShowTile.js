import React from 'react'

const ShowTile = props => {

  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip

  return(
    <div className="callout">
      <h1>{name}</h1>
      <p className="address">{address}, {city}, {state}, {zip}</p>
    </div>

  )
}

export default ShowTile
