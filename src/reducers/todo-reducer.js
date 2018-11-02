import { ADD_TODO, SUBMIT_TODO } from '../actions/user-actions'

export default function todoReducer (state = null, { type, payload }) {
  switch (type) {
    case SUBMIT_TODO:
      // console.log(type, 'type')
      // console.log(payload, 'payload')
      return ([ ...state.concat({ todo: payload.todo, id: payload.id, complete: false }) ])
    default:
      return state
  }
}
