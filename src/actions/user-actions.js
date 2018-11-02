// import $ from 'jquery'
// export const ADD_TODO = 'todo:addTodo'
export const SUBMIT_TODO = 'todo:saveTodo'

// export function newTodo (newTodo) {
//   return {
//     type: ADD_TODO,
//     payload: {
//       creatingTodo: newTodo
//     }
//   }
// }

export function saveTodo (value) {
  return {
    type: SUBMIT_TODO,
    payload: {
      todo: `${value}`,
      id: Math.floor(Math.random() * 100)

    }
  }
}
