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

      <div className="address">
        <p>{address}</p>
        <p>{city}, {state}, {zip}</p>
      </div>
      
    </div>

  )
}

export default ShowTile
