
import { 
  LOGIN_USER, 
  REGISTER_USER, 
  AUTH_USER, 
  PROFILE_EDIT_PROCESS, 
  PROFILE_EDIT, 
  PROFILE_CANCEL, 
  SET_MYPAGE_USER, 
  SET_MYPAGE_USER_ID,
  SET_MYPAGE } from "_actions/types";

const initState = {
  userId: "",
  userImg: "",
  userName: "",
  journeyType: "",
  lifeStyle: "",
  isAuth: false,
  profileMode: "READ",
  otherUser: false,
  otheruserId: "",
  otheruserImg: "",
  otheruserName: "",
  otherjourneyType: "",
  otherlifeStyle: "",
  
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

    case PROFILE_EDIT:
      return {
        ...state,
        profileMode: action.mode,
      }
    
    case PROFILE_CANCEL:
      return {
        ...state,
        profileMode: action.mode,
      }
    
    case PROFILE_EDIT_PROCESS:
      return {
        ...state, 
        userImg: action.payload.userImg,
        profileMode: action.mode
      }

    case SET_MYPAGE_USER:

      return {
        ...state,
        
        otheruserImg: action.payload.userImg, 
        otheruserName: action.payload.userName,
        otherjourneyType: action.payload.journeyType, 
        otherlifeStyle: action.payload.lifeStyle
      }
    
    case SET_MYPAGE_USER_ID:
      return {
        ...state,
        otheruserId: action.id,
        otherUser: action.mode, 
      }

    case SET_MYPAGE:
      return {
        ...state,
        otherUser: action.mode, 
      }

    default:
      return state;
  }
}
