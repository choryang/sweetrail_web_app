import React from "react";
import "css/common.scss";
import {withRouter} from "react-router-dom";

function JourneyThumb(props) {
  const onClick = () => {
    // props.history.push(`/journey/${props.id}`);
    props.history.push(`/journey/1`);
  }
  
  return (
    <div className="common-journey item" onClick={onClick}>
      <img src={props.img} alt="example"/>
    </div>
  );
  
}

export default withRouter(JourneyThumb);

/* <div className="journeyItem" onClick={onClick}>
    <span>{props.name}</span><br/>
    <span>{props.type}</span><br/>
    <span>{props.accompany}</span><br/>
  </div> */