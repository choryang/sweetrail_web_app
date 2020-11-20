import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BlueBtn from "components/fragments/BlueBtn";
import WhiteBtn from "components/fragments/WhiteBtn";
import { getFollow, setFollow, unFollow } from "_actions/follow_action";
import "css/modal.scss";

function FollowItem(props) {
  
  const [IsFollow, setIsFollow] = useState(true);
  const dispatch = useDispatch();
  var UserInfo = useSelector(state => state.user);
  var profileImg = process.env.REACT_APP_IMAGE_URL + props.img;
  const body = {
    id: UserInfo.userId,
    name: UserInfo.userName,
    img: UserInfo.userImg,
    otherId: props.userId,
    otherName: props.name,
    otherImg: props.img
  }

  const onClickSetFollow = () => {
    var action;
    if(!IsFollow) {
      action = setFollow(body)
    }
    else {
      action = unFollow(body)
    }
    dispatch(action).then((response) => setIsFollow(response.payload.isFollow));
  }

  useEffect(() => {
    dispatch(getFollow(body)).then((response) => setIsFollow(response.payload.isFollow));
  }, []);

  return (
    <div className="modal-follow-item">
        <div className="modal-follow-user">
          <img className="follow-profile-img" src={profileImg} alt="userprofile"/>
          <div className="follow-name">{props.name}</div>
        </div>
        {IsFollow ? <BlueBtn onClick={onClickSetFollow}/> : <WhiteBtn onClick={onClickSetFollow}/>}
  </div>
  );
}

export default FollowItem;