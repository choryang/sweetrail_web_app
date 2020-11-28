import React from "react";
import unscrap from "images/unscrap.png";
import "css/button.scss";

function UnscrapBtn(props) {
  return <img className="scrap-btn" onClick={props.onClick} src={unscrap} alt="scrap"/>;
}

export default UnscrapBtn;