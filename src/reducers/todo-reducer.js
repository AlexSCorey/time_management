import { SUBMIT_USER } from '../actions/user-actions'

export default function todoReducer (state = null, { type, payload }) {
  switch (type) {
    case SUBMIT_USER:
      console.log(type, 'type')
      console.log(payload, 'payload')
      return ([ ...state.concat({ todo: payload.todo, id: payload.id }) ])
    default:
      return state
  }
}
