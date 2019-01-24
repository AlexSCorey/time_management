import React, { Component } from 'react'

// import AddTodo from './AddTodo'
import TodoList from './TodoList'

class TodoContainer extends Component {
  render () {
    let { todos } = this.props
    return (
      <TodoList className='todoList' todos={todos} key={todos.id} />
    )
  }
}
export default TodoContainer
