import axios from "axios";
import { JOURNEY_MAIN } from "_actions/types";
export function journeyMain() {
  const request = axios
    .get("/api/journey/main")
    .then((response) => response.data);

  return {
    type: JOURNEY_MAIN,
    payload: request,
  };
}
