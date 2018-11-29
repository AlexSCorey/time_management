import { LAST_WEEK, NEXT_WEEK } from '../actions/user-actions'

export default function currentWeekReducer (state = null, { type, payload }) {
  switch (type) {
    case NEXT_WEEK:
      return (state, payload.nextWeek)
    case LAST_WEEK:
      return (state, payload.lastWeek)
    default:
      return state
  }
}
