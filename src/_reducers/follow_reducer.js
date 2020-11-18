import { FOLLOW_CHECK } from "_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case FOLLOW_CHECK:
      return { 
          ...state,
          isFollow: action.payload.isFollow
     };

     case SET_FOLLOWING:
       return {
         ...state,
         isFollow: action.payload.isFollow
       }

    default:
      return state;
  }
}
