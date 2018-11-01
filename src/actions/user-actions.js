import $ from 'jquery'
export const UPDATE_USER = 'users:updateUser'
export const SHOW_ERROR = 'users:showError'
export const SAVE_TODO = 'users:saveTodo'

export function updateUser (newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function saveTodo () {
  console.log('here user-actions')
  return {
    type: SAVE_TODO,
    payload: {
      user: 'save'

    }
  }
}

export function showError () {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'ERROR!!'
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
        dispatch(showError())
      }
    })
  }
}
