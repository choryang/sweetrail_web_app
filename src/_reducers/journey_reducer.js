import { JOURNEY_MAIN } from "_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case JOURNEY_MAIN:
      return { ...state, success: action.payload };

    default:
      return state;
  }
}
