import React from 'react'

const ShowReviewTile = props => {
 let user_name = `${props.user.first_name} ${props.user.last_name}`
  return(
    <div>
    <h4>{props.title} | {user_name}</h4>
    <p>{props.body}</p>

    </div>
  )
}


export default ShowReviewTile
