import React from 'react'

const ShowReviewTile = props => {
  let profilePicture;
  if(props.userPhoto){
    profilePicture = props.userPhoto.url
  }
  return(
    <div>
      <img src={profilePicture}></img>
      <h5>{props.userFirstName} {props.userLastName}</h5>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}


export default ShowReviewTile
