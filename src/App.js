import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import { newTodo, saveTodo } from './actions/user-actions'
import { login, register } from './actions/login-actions'
import TodoContainer from './components/TodoContainer'
import LoginContainer from './components/LoginContainer'
import Profile from './components/Profile'

class App extends Component {
  render () {
    let { todos, onSaveTodo, onNewTodo, creatingTodo, onLogin, onRegister } = this.props
    return (
      <Router>
        <div className='main'>
          <div className='routes'>
            <Route path='/' render={() =>
              <LoginContainer onLogin={onLogin} onRegister={onRegister} />}
            />
            <Route path='/profile' render={() =>
              <Profile />}
            />
            <Route path='/list' render={() =>
              <TodoContainer todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />}
            />
          </div>
        </div>
      </Router>
    )

    // let { todos, onSaveTodo, onNewTodo, creatingTodo } = this.props
    // if (this.props.currentUser) {
    //   return (
    //     <TodoContainer todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
    //   )
    // } else {
    //   return (
    //     <div>
    //       <TodoContainer todos={todos} key={todos.id} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />
    //       {/* <LoginContainer onLogin={onLogin} onRegister={onRegister} /> */}
    //     </div>
    //   )
    // }
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
const Guard = ({ redirectTo, condition, children }) => {
  if (condition) {
    return children
  } else {
    return <Redirect to={redirectTo} />
  }
}
export default connect(mapStateToProps, mapActionsToProps)(App)
