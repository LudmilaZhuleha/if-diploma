import {add_to_orders, add_to_waitingList, return_from_orders} from "./actionTypes";

const initialState = {
  orders: [],
  waitingList: [],
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_to_orders:
      return {...state, orders: [...state.orders, action.payload]};
    case return_from_orders:
      return {...state, orders: action.payload};
    case add_to_waitingList:
      return {...state, waitingList: [...state.waitingList, action.payload]};
    default:
      return state;
  }
}

export default ordersReducer;