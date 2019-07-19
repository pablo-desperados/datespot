import React from 'react'

const ShowTile = props => {

  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip

  return(
    <div>
      <h1>{name}</h1>
      <div>
        <div className="callout" id="details">
          <p>{address}, {city}, {state}, {zip}</p>
        </div>
      </div>
    </div>

  )
}

export default ShowTile
