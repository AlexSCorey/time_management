import React, { Component } from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

class TodoContainer extends Component {
  render () {
    let { todos, onSaveTodo, creatingTodo } = this.props
    if (todos && todos.length > 0) {
      return (
        <div >
          <AddTodo onSaveTodo={onSaveTodo} creatingTodo={creatingTodo} />
          <div className='todoContainer'>
            <TodoList className='todoList' todos={todos} key={todos.id} />
          </div>
        </div>
      )
    } else {
      return (
        <TodoList todos={todos} />
      )
    }
  }
}
export default TodoContainer
