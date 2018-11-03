import {
  ADD_TODO,
  SUBMIT_TODO } from '../actions/user-actions'

export default function todoReducer (state = null, { type, payload }) {
  switch (type) {
    case SUBMIT_TODO:
      // console.log(type, 'type')
      // console.log(payload, 'payload')
      return ([ ...state.concat({ title: payload.title, id: payload.id, complete: false, editing: false }) ])
    case ADD_TODO:
      console.log(payload, 'payload')
      return ([...state.concat({ title: payload.title })])
    default:
      return state
  }
}
