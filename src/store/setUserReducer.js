import {user_birthday, user_email, user_password, user_username} from "./actionTypes";

const initialState = {
  username: null,
  birthday: null,
  email: null,
  password: null,
}

const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user_username:
      return {...state, username: action.payload};
    case user_birthday:
      return {...state, birthday: action.payload};
    case user_email:
      return {...state, email: action.payload};
    case user_password:
      return {...state, password: action.payload};
    default:
      return state;
  }
}

export default setUserReducer;