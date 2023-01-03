import {logIn, logOut} from "./actions";

const initialState = {
  isLogged: false,
}
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case logIn:
      return {...state, isLogged: action.payload};
    case logOut:
      return {...state, isLogged: action.payload};
    default:
      return state;
  }
}

export default loginReducer;