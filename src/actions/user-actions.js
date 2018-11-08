
// import $ from 'jquery'
export const ADD_TODO = 'ADD_TODO'
export const SUBMIT_TODO = 'todo:saveTodo'
export const CREATE_PROFILE = 'CREATE_PROFILE'

export function newTodo (newTodo) {
  console.log(newTodo, 'new Todo')
  return {
    type: ADD_TODO,
    payload: {
      title: newTodo
    }
  }
}

export function saveTodo (value) {
  console.log(value, 'value')
  return {
    type: SUBMIT_TODO,
    payload: {
      title: `${value}`,
      id: Math.floor(Math.random() * 100)
    }
  }
}
