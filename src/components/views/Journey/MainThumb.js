import React from "react";
import "css/common.scss";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setMypageUserId } from "_actions/user_action";

function MainThumb(props) {

  const dispatch = useDispatch();
  const UserInfo = useSelector(state => state.user);
  const onClick = () => {
    props.history.push(`/journey/${props.id}`);
  }

  const journeyImg = process.env.REACT_APP_IMAGE_URL + props.img;

  const otherUserPage = () => {
    if (props.authorId !== UserInfo.userId){
      dispatch(setMypageUserId(props.authorId));
    }
    props.history.push(`/mypage/${props.author}`);
  }
  
  return (
    <div className="main-journey item">
      <img src={journeyImg} alt="journey"/>
      <div className="overlay" onClick={onClick}></div>
      <span className="common-category-badge yellow">{props.type}</span>
      <div className="main-journey-info">
        <p className="journey-info-title" onClick={onClick}>{props.name}</p>
        <div className="journey-info-others">
          <p className="journey-info-grey">created by </p>
          <p className="journey-info-grey author" onClick={otherUserPage}>{props.author}</p>
        </div>
      </div>
    </div>
  );
  
}

export default withRouter(MainThumb);