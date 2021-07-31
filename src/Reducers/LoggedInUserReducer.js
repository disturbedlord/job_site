import { GET_USER, SAVE_USER } from "../actions/types";

const initialState = {
  loggedInUser: {
    name: "",
    emailId: "",
    authToken: "",
    photo: "",
  },
};

function initState() {
  console.log(
    "not one:",
    localStorage.getItem("name"),
    typeof localStorage.getItem("hasData"),
    localStorage.getItem("hasData")
  );
  const name = localStorage.getItem("name");
  const emailId = localStorage.getItem("emailId");
  const authToken = localStorage.getItem("authToken");
  const photo = localStorage.getItem("photo");
  const data = {
    name: name,
    emailId: emailId,
    authToken: authToken,
    photo: photo,
  };
  console.log(data);
  return {
    loggedInUser: data,
  };
}

const setData = (action) => {
  const data = action.payload;
  localStorage.setItem("hasData", "1");
  localStorage.setItem("name", data.name);
  localStorage.setItem("emailId", data.emailId);
  localStorage.setItem("authToken", data.authToken);
  localStorage.setItem("photo", data.photo);

  initialState.loggedInUser = {
    name: data.name,
    emailId: data.emailId,
    authToken: data.authToken,
    photo: data.photo,
  };
};

export default function (state = initState(), action) {
  console.log("action: ", action);
  switch (action.type) {
    case SAVE_USER:
      console.log(action.payload);
      setData(action);
      return state;
    case GET_USER:
      state = initState();
      return state;
    default:
      state = initState();
      return state;
  }
}
