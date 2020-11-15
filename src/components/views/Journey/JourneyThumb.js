import React from "react";
import "css/common.scss";
import {withRouter} from "react-router-dom";

function JourneyThumb(props) {
  const onClick = () => {
    props.history.push(`/journey/${props.id}`);
  }

  const otherUserPage = (e) => {
    e.preventDefault();
    props.history.push(`/mypage`);
  }
  
  return (
    <div className="common-journey-item">
      <img src="https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg" alt="example" onClick={onClick}/>
      <span className="common-category-badge yellow">{props.type}</span>
      <div className="journey-info">
        <p className="journey-info-title" onClick={onClick}>{props.name}</p>
        <div className="journey-info-others">
          <p className="journey-info-grey">created by </p>
          <p className="journey-info-grey author" onClick={otherUserPage}>{props.author}</p>
        </div>
      </div>
    </div>
  );
  
}

export default withRouter(JourneyThumb);

/* <div className="journeyItem" onClick={onClick}>
    <span>{props.name}</span><br/>
    <span>{props.type}</span><br/>
    <span>{props.accompany}</span><br/>
  </div> */