import { 
  LOGIN_USER, 
  REGISTER_USER, 
  AUTH_USER, 
  LOGOUt_USER,
  PROFILE_EDIT_PROCESS, 
  PROFILE_EDIT, 
  PROFILE_CANCEL, 
  SET_MYPAGE_USER_ID,
  SET_MYPAGE, 
  GET_USER_INFO} from "_actions/types";


export default function (state = {}, action) {
  
  switch (action.type) {
    case LOGIN_USER:
      return { 
        ...state,
        isAuth: true, 
        isLogin: action.payload.isLogin
       };

    case REGISTER_USER:
      return { ...state };

    case AUTH_USER:
      return { 
        ...state, 
        isAuth: action.payload.isAuth,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userImg: action.payload.userImg,
        journeyType: action.payload.journeyType,
        lifeStyle: action.payload.lifeStyle,
      };
    
    case GET_USER_INFO:
      if(state.otherUser){
        return {
          ...state,
          otheruserImg: action.payload.userImg, 
          otheruserName: action.payload.userName,
          otherjourneyType: action.payload.journeyType, 
          otherlifeStyle: action.payload.lifeStyle
        }
      }
      // else {
      //   return {
      //     ...state,
      //     userImg: action.payload.userImg, 
      //     userName: action.payload.userName,
      //     journeyType: action.payload.journeyType, 
      //     lifeStyle: action.payload.lifeStyle
      //   }
      // }
    

    case LOGOUt_USER:
      return { 
        ...state,
        isLogin: false,
        isAuth: false
      }

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