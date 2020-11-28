import { SCRAP_CHECK } from "_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case SCRAP_CHECK:
      return { 
          ...state,
          isScrap: action.payload.isScrap
     };

    default:
      return state;
  }
}
