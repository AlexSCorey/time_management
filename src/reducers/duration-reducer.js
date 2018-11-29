import {
  ADD_DURATION } from '../actions/user-actions'

export default function durationReducer (state = null, { type, payload }) {
  switch (type) {
    case ADD_DURATION:
      console.log(payload.duration, 'payload duration Reducer')
      return ([...state, payload.duration])
    default:
      return state
  }
}
