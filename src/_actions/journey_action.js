import axios from "axios";
import { JOURNEY_MAIN, JOURNEY_MYPAGE, JOURNEY_DETAIL, JOURNEY_OTHERPAGE } from "_actions/types";
export function journeyMain() {
  const request = axios
    .get("/api/journey/main")
    .then((response) => response.data);

  return {
    type: JOURNEY_MAIN,
    payload: request,
  };
}

export function journeyMypage(id) {
  const request = axios
    .get(`/api/journey/mypage/${id}`)
    .then((response) => response.data);

  return {
    type: JOURNEY_MYPAGE,
    payload: request,
  };
}

export function journeyOtherpage(id) {
  const request = axios
    .get(`/api/journey/otherpage/${id}`)
    .then((response) => response.data);

  return {
    type: JOURNEY_OTHERPAGE,
    payload: request,
  };
}

export function journeyDetail(id) {
  const request = axios
    .get(`/api/journey/detail/${id}`)
    .then((response) => response.data);

  return {
    type: JOURNEY_DETAIL,
    payload: request,
  };
}