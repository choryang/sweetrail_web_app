import axios from "axios";
import {FOLLOW_CHECK, SET_FOLLOWING, SET_UNFOLLOW, GET_FOLLOWING, GET_FOLLOWER, COUNT_FOLLOWING, COUNT_FOLLOWER } from "_actions/types";

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

export function unFollow(dataToSubmit) {
  const request = axios
    .post("/api/follow/unfollow", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SET_UNFOLLOW,
    payload: request,
  };
}

export function getFollowingList(id) {
  const request = axios
    .get(`/api/follow/get-following-list/${id}`)
    .then((response) => response.data);

  return {
    type: GET_FOLLOWING,
    payload: request,
  };
}

export function getFollowerList(id) {
  const request = axios
    .get(`/api/follow/get-follower-list/${id}`)
    .then((response) => response.data);

  return {
    type: GET_FOLLOWER,
    payload: request,
  };
}

export function countFollowing(id) {
  const request = axios
    .get(`/api/follow/count-following/${id}`)
    .then((response) => response.data);

  return {
    type: COUNT_FOLLOWING,
    payload: request,
  };
}

export function countFollower(id) {
  const request = axios
    .get(`/api/follow/count-follower/${id}`)
    .then((response) => response.data);

  return {
    type: COUNT_FOLLOWER,
    payload: request,
  };
}