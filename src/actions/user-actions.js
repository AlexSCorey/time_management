import $ from 'jquery'
export const UPDATE_USER = 'users:updateUser'
export const SUBMIT_USER = 'users:saveTodo'
export const SAVE_TODO = 'users:saveTodo'

export function updateUser (newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function saveTodo (value) {
  console.log(value)
  return {
    type: SUBMIT_USER,
    payload: {
      user: `${value}`

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
