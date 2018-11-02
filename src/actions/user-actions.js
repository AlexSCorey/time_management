import $ from 'jquery'
export const UPDATE_USER = 'users:updateUser'
export const SUBMIT_USER = 'todo:saveTodo'
export const SAVE_TODO = 'todo:saveTodo'

export function updateUser (newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function saveTodo (value) {
  console.log(value, 'value in user action')
  return {
    type: SUBMIT_USER,
    payload: {
      todo: `${value}`,
      id: Math.random()

    }
  }
}

export function apiRequest () {
  return dispatch => {
    $.ajax({
      url: 'http://google.com',
      success (response) {
        dispatch(updateUser(response.newUser))
        console.log('success')
      },
      error () {
        console.log('error')
      }
    })
  }
}
