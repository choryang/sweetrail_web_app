import axios from "axios";
import {FOLLOW_CHECK } from "_actions/types";

export function getFollow(dataToSubmit) {
  const request = axios
    .post("/api/follow/follow-check", dataToSubmit)
    .then((response) => response.data);

  return {
    type: FOLLOW_CHECK,
    payload: request,
  };
}