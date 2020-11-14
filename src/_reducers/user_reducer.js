
import { LOGIN_USER, REGISTER_USER, AUTH_USER, PROFILE_EDIT_PROCESS } from "_actions/types";
import defaultImg from "images/user.png";

const initState = {
  userId: "",
  userImg: defaultImg,
  userName: "",
  journeyType: "",
  lifeStyle: "",
  isAuth: false,
  otherUserId: "",
}

export default function (state = initState, action) {
  
  switch (action.type) {
    case LOGIN_USER:
      return { 
        ...state,
       };

    case REGISTER_USER:
      return { ...state };

    case AUTH_USER:
      return { 
        ...state, 
        isAuth: action.payload.isAuth,
        userId: action.payload.userId, 
        userImg: action.payload.userImg, 
        userName: action.payload.userName,
        journeyType: action.payload.journeyType, 
        lifeStyle: action.payload.lifeStyle
      };
    
    

    case PROFILE_EDIT_PROCESS:
      return {
        ...state, 
        userImg: action.payload.userImg
      }

    default:
      return state;
  }
}
