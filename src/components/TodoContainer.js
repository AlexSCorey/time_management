import React, { Component } from 'react'

import DailyTodo from './DailyTodos'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class TodoContainer extends Component {
  render () {
    let { todos, onSaveTodo, onNewTodo, creatingTodo, onAddDuration } = this.props
    if (todos && todos.length > 0) {
      return (
        <div >
          <AddTodo onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} onAddDuration={onAddDuration} creatingTodo={creatingTodo} />
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
