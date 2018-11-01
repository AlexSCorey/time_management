import { SAVE_TODO } from '../actions/user-actions'

export default function todoReducer (state = [], { type, payload }) {
  console.log(payload)
  switch (type) {
    case SAVE_TODO:
      console.log(payload.user)
      return payload.user
    default:
      return state
  }
}
