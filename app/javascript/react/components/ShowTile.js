import React from 'react'

const ShowTile = props => {
  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip
  let rating = props.rating
  return(
    <div>
      <h1>{name}</h1>
      <h3>{rating}</h3>
      <i onClick={props.handleClick} className="fa fa-arrow-circle-up fa-2x"></i>
      <i onClick={props.handleClick} className="fa fa-arrow-circle-down fa-2x"></i>
      <p>{address}, {city}, {state}, {zip}</p>
    </div>

  )
}

export default ShowTile
