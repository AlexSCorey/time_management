import {
  LOGIN,
  REGISTER } from '../actions/user-actions'

export default function loginReducer (state = null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        // api call to login user.
        // then set user in state
      }
    case REGISTER:
      return {
        // api call to register user
      }
  }
}
