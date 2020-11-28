import React from "react";
import scrap from "images/scrap.png";
import "css/button.scss";

function ScrapBtn(props) {
  return <img className="scrap-btn" onClick={props.onClick} src={scrap} alt="scrap"/>;
}

export default ScrapBtn;