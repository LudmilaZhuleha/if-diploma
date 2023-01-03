import {
  add_to_orders, add_to_waitingList,
  fetched_books,
  filtered_books, return_from_orders,
  user_birthday,
  user_email,
  user_password,
  user_username
} from "./actionTypes";

export const saveUserName =(payload)=>(
  {type: user_username, payload: payload}
)
export const saveUserBirthday =(payload)=>(
  {type: user_birthday, payload: payload}
)
export const saveUserEmail =(payload)=>(
  {type: user_email, payload: payload}
)
export const saveUserPassword =(payload)=>(
  {type: user_password, payload: payload}
)
export const fetchedBooks =(payload)=>(
  {type: fetched_books, payload: payload}
)
export const filteredBooks =(payload)=>(
  {type: filtered_books, payload: payload}
)
export const addToOrders =(payload)=>(
  {type: add_to_orders, payload: payload}
)
export const returnFromOrders =(payload)=>(
  {type: return_from_orders, payload: payload}
)
export const addToWaitingList =(payload)=>(
  {type: add_to_waitingList, payload: payload}
)
export const logIn = (payload) =>(
  {type: logIn, payload: payload}
)
export const logOut = (payload) =>(
  {type: logOut, payload: payload}
)