import React from "react";
import "css/common.scss";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setMypageUserId } from "_actions/user_action";

function JourneyThumb(props) {

  const dispatch = useDispatch();
  const UserInfo = useSelector(state => state.user);
  const onClick = () => {
    props.history.push(`/journey/${props.id}`);
  }

  const otherUserPage = () => {
    if (props.authorId !== UserInfo.userId){
      dispatch(setMypageUserId(props.authorId));
    }
    props.history.push(`/mypage/${props.author}`);
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