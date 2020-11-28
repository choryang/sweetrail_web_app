import axios from "axios";
import { SCRAP_CHECK, SET_SCRAP, SET_UNSCRAP, GET_SCRAP_LIST } from "_actions/types";

export function getScrap(dataToSubmit) {
  const request = axios
    .post("/api/scrap/scrap-check", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SCRAP_CHECK,
    payload: request,
  };
}

export function setScrap(dataToSubmit) {
  const request = axios
    .post("/api/scrap/set-scrap", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SET_SCRAP,
    payload: request,
  };
}

export function unScrap(dataToSubmit) {
  const request = axios
    .post("/api/scrap/unscrap", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SET_UNSCRAP,
    payload: request,
  };
}

export function getScrapList(id) {
  const request = axios
    .get(`/api/scrap/get-scrap-list/${id}`)
    .then((response) => response.data);

  return {
    type: GET_SCRAP_LIST,
    payload: request,
  };
}