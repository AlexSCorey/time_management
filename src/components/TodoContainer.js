import React, { Component } from 'react'

import TodoList from './DailyTodos'
import AddTodo from './AddTodo'

class TodoContainer extends Component {
  render () {
    let { todos, onSaveTodo, onNewTodo, creatingTodo } = this.props
    if (todos.length > 0) {
      return (
        <div>
          <AddTodo onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
          <TodoList todos={todos} key={todos.id} />
        </div>
      )
    } else {
      return (
        <TodoList todos={todos} key={todos.id} />
      )
    }
  }
}
export default TodoContainer
