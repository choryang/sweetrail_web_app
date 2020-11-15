import { JOURNEY_MAIN, JOURNEY_MYPAGE, JOURNEY_DETAIL } from "_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case JOURNEY_MAIN:
      return { ...state };
    
    case JOURNEY_MYPAGE:
      return { ...state, mypageSuccess: action.payload };
    
    case JOURNEY_DETAIL:
      return { ...state, detailSuccess: action.payload };

    default:
      return state;
  }
}
