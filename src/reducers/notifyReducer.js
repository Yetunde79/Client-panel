import { NOTIFY_USER } from "../actions/types";
import { actionTypes } from "redux-firestore";

const initialState = {
  //these is data under the notify states
  message: null,
  messageType: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    default:
      return state;
  }
}
