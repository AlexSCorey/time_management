import { LOGIN, REGISTER, REGISTERING, LOGOUT } from '../actions/user-actions'

export default function loginReducer (state = null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return ({}
      // api call to login user.
      // then set user in state
      )
    case REGISTER:
      return (
        {}
        // api call to register user
      )
    case REGISTERING:
      return (
        { registering: true }
      )
    case LOGOUT:
      return (state, null, window.locatStore.clear())
    default:
      return state
  }
}
