import React from "react";
import "css/journey.css";
import {withRouter} from "react-router-dom";

function JourneyThumb(props) {
  const onClick = () => {
    props.history.push(`/mypage/journey/${props.id}`);
  }
  
  return (
  <div className="journeyItem" onClick={onClick}>
    <span>{props.name}</span><br/>
    <span>{props.type}</span><br/>
    <span>{props.accompany}</span><br/>
  </div>);
}

export default withRouter(JourneyThumb);
