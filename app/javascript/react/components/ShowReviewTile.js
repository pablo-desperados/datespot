import React from 'react'

const ShowReviewTile = props => {
  return(
    <div className="callout">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}


export default ShowReviewTile
