import React from 'react'

const ShowTile = props => {

  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip
  let rating = props.rating
  let picture;

  if (props.picture) {
    picture = props.picture.url
  }

  return(
    <div className="callout">
      <h1>{name}</h1>

      <div className="location-info">
        <img src={picture}></img>

        <div>
          <i onClick={props.handleClick} className="fa fa-arrow-circle-up fa-2x"></i>
          <h3 className="rating">{rating}</h3>
          <i onClick={props.handleClick} className="fa fa-arrow-circle-down fa-2x"></i>
        </div>

        <div className="address">
          <p>{address}</p>
          <p>{city}, {state}, {zip}</p>
        </div>
      </div>

    </div>
  )
}

export default ShowTile
