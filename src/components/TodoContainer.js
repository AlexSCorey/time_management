import React, { Component } from 'react'

import TodoList from './todo-list'

class TodoContainer extends Component {
  render () {
    let { todos, onSaveTodo, onNewTodo, creatingTodo } = this.props
    return (
      <div>
        <TodoList todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
      </div>
    )
  }
}
export default TodoContainer
