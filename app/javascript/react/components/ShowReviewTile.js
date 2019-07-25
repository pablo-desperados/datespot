import React from 'react'

const ShowReviewTile = props => {
  let profilePicture;
  if(props.userPhoto){
    profilePicture = props.userPhoto.url
  }
  return(
    <div className="callout review grid-x">
      <img className="profile-pic cell small-2" src={profilePicture}></img>
      <h5 className="username cell small-10">{props.userFirstName} {props.userLastName}</h5>
      <h4 className="cell small-10 small-offset-1">{props.title}</h4>
      <p className="cell small-10 small-offset-1">{props.body}</p>
    </div>
  )
}


export default ShowReviewTile
