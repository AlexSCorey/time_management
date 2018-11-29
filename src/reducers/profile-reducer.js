import { SAVE_PROFILE } from '../actions/user-actions'

export default function profileReducer (state = [], { type, payload }) {
  switch (type) {
    case SAVE_PROFILE:
      return (
        // console.log(type)
        [ ...state.concat(payload) ]
      )
    default:
      return (state)
  }
}
