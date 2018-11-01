import { SAVE_TODO } from '../actions/user-actions'

export default function todoReducer (state = [], { type, payload }) {
  switch (type) {
    case SAVE_TODO:
      console.log(payload, 'type')
      return { ...state.todo, payload }
    default:
      return state
  }
}
