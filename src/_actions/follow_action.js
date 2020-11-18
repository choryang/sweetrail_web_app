import axios from "axios";
import {FOLLOW_CHECK, SET_FOLLOWING } from "_actions/types";

export function getFollow(dataToSubmit) {
  const request = axios
    .post("/api/follow/follow-check", dataToSubmit)
    .then((response) => response.data);

  return {
    type: FOLLOW_CHECK,
    payload: request,
  };
}

export function setFollow(dataToSubmit) {
  const request = axios
    .post("/api/follow/set-follow", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SET_FOLLOWING,
    payload: request,
  };
}