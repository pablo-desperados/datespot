import React from 'react'

const ShowReviewTile = props => {
  let profilePicture;
  if(props.userPhoto){
    profilePicture = props.userPhoto.url
  }
  return(
    <div className="callout review">
      <div className="grid-x grid-margin-x">
        <div className="cell small-2 user-info">
          <img className="profile-pic cell small-2" src={profilePicture}></img>
          <div className="cell">
             <h6> User: {props.userFirstName} {props.userLastName}</h6>
          </div>
        </div>
        <div className="cell small-10">
          <div className="grid-y">
            <div className="cell">
              <h3>{props.title}</h3>
            </div>
            <div className="cell">
              <p>{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <div>
//   <div className="grid-x">
//     <img className="profile-pic cell small-2" src={profilePicture}></img>
//     <h5 className="username cell small-10">{props.userFirstName} {props.userLastName}</h5>
//   </div>
//     <div className="grid-y">
//     <h4 className="cell small-10 small-offset-1">{props.title}</h4>
//     <p className="cell small-10 small-offset-1">{props.body}</p>
//     </div>
// </div>

export default ShowReviewTile
