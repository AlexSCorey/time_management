
import { UPDATE_USER, SUBMIT_USER } from '../actions/user-actions'

export default function userReducer (state = '', { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      console.log('here')
      return payload.user
    case SUBMIT_USER:
      console.log(payload.user, 'user')
      return payload.user
    default:
      return state
  }
}
