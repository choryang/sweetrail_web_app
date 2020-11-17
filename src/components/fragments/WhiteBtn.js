import React from "react";
import "css/button.scss";

function WhiteBtn(props) {
  return <button className="white-btn" onClick={props.onClick}>팔로우</button>;
}

export default WhiteBtn;
