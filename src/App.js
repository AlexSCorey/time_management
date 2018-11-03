import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'

import { newTodo, saveTodo } from './actions/user-actions'
import { login, register } from './actions/login-actions'
import TodoList from './components/todo-list'
// import LoginContainer from './components/LoginContainer'

class App extends Component {
  render () {
    let { todos, onSaveTodo, onNewTodo, creatingTodo } = this.props
    if (this.props.currentUser) {
      return (
        <TodoList todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
      )
    } else {
      return (
        <div>
          <TodoList todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
          {/* <LoginContainer onLogin={onLogin} onRegister={onRegister} /> */}
        </div>
      )
    }
  }
}

// const userSelector = createSelector(
//   state => state.user,
//   user => user
// )
const todoSelector = createSelector(
  state => state.todos,
  todos => todos
)
const mapStateToProps = createSelector(
  // userSelector,
  todoSelector,
  (
    // user,
    todos) => ({
    // user,
    todos
  })
)
const mapActionsToProps = {
  onNewTodo: newTodo,
  onSaveTodo: saveTodo,
  onLogin: login,
  onRegister: register
}

export default connect(mapStateToProps, mapActionsToProps)(App)
