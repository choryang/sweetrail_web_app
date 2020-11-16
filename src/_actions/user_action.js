import axios from "axios";
import { 
  LOGIN_USER, 
  REGISTER_USER,
  AUTH_USER, 
  GET_USER_INFO,
  LOGOUt_USER,
  PROFILE_EDIT_PROCESS, 
  PROFILE_EDIT, 
  PROFILE_CANCEL, 
  SET_MYPAGE_USER_ID,
  SET_MYPAGE } from "_actions/types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/user/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/user/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/user/auth").then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function getUserInfo(id) {
  const request = axios.get(`/api/user/user-info/${id}`)
  .then((response) => response.data);
  
  return {
    type: GET_USER_INFO,
    payload: request,
    
  }
}

export function logoutUser() {
  return {
    type: LOGOUt_USER
  }
}

export function profileEdit(){
  return {
    type: PROFILE_EDIT,
    mode: "EDIT"
  }
}

export function profileCancel(){
  return {
    type: PROFILE_CANCEL,
    mode: "READ"
  }
}

export function profileEditProcess(formData) {
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  const request = axios.post("/api/user/profile-upload", formData, config)
  .then((response) => response.data);
  
  return {
    type: PROFILE_EDIT_PROCESS,
    payload: request,
    mode: "READ"
  }
}

export function setMypageUserId(id) {
  return {
    type: SET_MYPAGE_USER_ID,
    id: id,
    mode: true
  }
}

export function setMyPage() {
  return {
    type: SET_MYPAGE,
    mode: false
  }
}
  