import { GET_USER, SAVE_USER } from "./types";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const saveUser = (user) => {
  console.log("saveUser: ", user);
  return {
    type: SAVE_USER,
    payload: user,
  };
};
