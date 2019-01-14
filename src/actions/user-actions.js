
import moment from 'moment'

export const ADD_TODO = 'ADD_TODO'
export const SUBMIT_TODO = 'SUBMIT_TODO'
export const CREATE_PROFILE = 'CREATE_PROFILE'
export const SAVE_PROFILE = 'SAVE_PROFILE'
export const ADD_DURATION = 'ADD_DURATION'
export const NEXT_WEEK = 'NEXT_WEEK'
export const LAST_WEEK = 'Last_WEEK'

// export function newTodo (newTodo) {
//   console.log(newTodo, 'newtodo')
//   return {
//     type: ADD_TODO,
//     payload: {
//       title: newTodo
//     }
//   }
// }
export function saveTodo (value, startDate, endDate) {
  console.log(value, 'value')
  let start = moment(startDate)
  let end = moment(endDate)
  let duration = moment.duration(end.diff(start))
  return {
    type: SUBMIT_TODO,
    payload: {
      title: `${value}`,
      startDate: start,
      duration: duration,
      todo_id: Math.floor(Math.random() * 100)
    }
  }
}
// export function addDuration (duration) {
//   return {
//     type: ADD_DURATION,
//     payload: {
//       duration: duration
//     }
//   }
// }
export function saveProfile (profile) {
  return ({
    type: SAVE_PROFILE,
    payload: {
      profile: profile
    }
  })
}
export function getNextWeekTodos (currentWeek) {
  let nextWeek = moment(currentWeek).add(1, 'week').format('MM-DD-YYYY')
  return ({
    type: NEXT_WEEK,
    payload: { nextWeek: nextWeek }
  })
}
export function getLastWeekTodos (currentWeek) {
  let lastWeek = moment(currentWeek).subtract(1, 'week').format('MM-DD-YYYY')
  return ({
    type: LAST_WEEK,
    payload: { lastWeek: lastWeek }
  })
}
