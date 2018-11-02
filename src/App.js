import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { newTodo, saveTodo } from './actions/user-actions'

import TodoList from './components/todo-list'

class App extends Component {
  render () {
    let { todo, onSaveTodo, onNewTodo, creatingTodo } = this.props
    return (
      <TodoList todo={todo} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
    )
  }
}

const userSelector = createSelector(
  state => state.user,
  user => user
)
const todoSelector = createSelector(
  state => state.todo,
  todo => todo
)
const mapStateToProps = createSelector(
  userSelector,
  todoSelector,
  (user, todo) => ({
    user,
    todo
  })
)
const mapActionsToProps = {
  onNewTodo: newTodo,
  onSaveTodo: saveTodo
}

export default connect(mapStateToProps, mapActionsToProps)(App)
