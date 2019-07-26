import React from 'react'

const ShowTile = props => {

  let name = props.name
  let address = props.address
  let city = props.city
  let state = props.state
  let zip = props.zip
  let rating = props.rating
  let category = props.category
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

        <h4>Category: {category}</h4>

        <div className="address">
          <h5>{address}</h5>
          <h5>{city}, {state}, {zip}</h5>
        </div>
      </div>

    </div>
  )
}

export default ShowTile
