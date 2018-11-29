import {
  SUBMIT_TODO } from '../actions/user-actions'

export default function todoReducer (state = null, { type, payload }) {
  switch (type) {
    case SUBMIT_TODO:
      return ([ ...state.concat({ todo_id: payload.id, title: payload.title, duration: payload.duration, complete: false, editing: false }) ])
    default:
      return state
  }
}
