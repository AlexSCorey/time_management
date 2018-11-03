// import $ from 'jquery'
export const ADD_TODO = 'todo:addTodo'
export const SUBMIT_TODO = 'todo:saveTodo'

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
