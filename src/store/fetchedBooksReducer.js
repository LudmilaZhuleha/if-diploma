import {fetched_books, filtered_books} from "./actionTypes";

const initialState = {
  available: '',
  filtered: '',
};

const fetchedBooksReducer = (state = initialState, action) =>{
    switch (action.type) {
      case fetched_books:
        return {...state, available: action.payload};
      case filtered_books:
        return {...state, filtered: action.payload};
      default:
        return state;
    }
}
export default fetchedBooksReducer;