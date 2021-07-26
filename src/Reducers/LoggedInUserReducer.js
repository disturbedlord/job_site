import { GET_USER, SAVE_USER } from "../actions/types";

const initialState = {
  loggedInUser: {
    name: "",
    emailId: "",
    authToken: "",
    photo: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_USER:
      console.log(action.payload);
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case GET_USER:
      return {
        ...state,
      };
    default:
      return initialState;
  }
}
