import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'
// import 'firebase'
import { newTodo, saveTodo, saveProfile, addDuration, getLastWeekTodos, getNextWeekTodos } from './actions/user-actions'
import { login, register } from './actions/login-actions'
import TodoContainer from './components/TodoContainer/TodoContainer'
import LoginContainer from './components/LoginAndRegister/LoginContainer'
import Profile from './components/Profile'
import DailyTodosContainer from './components/DailyCalendarTodo/DailyTodosContainer'
import Header from './components/Header'

class App extends Component {
  render () {
    let { todos, timeOfDay, onSaveTodo, onNewTodo, creatingTodo, onLogin, onRegister, onSaveProfile, profile, onAddDuration, onGetNextWeekTodos, onGetLastWeekTodos, currentWeek, weekDays } = this.props
    return (
      <Router>
        <div className='App'>
          <Header />
          <div className='main'>
            <div className='routes'>
              <Route path='/login' render={() =>
                <LoginContainer onLogin={onLogin} onRegister={onRegister} />}
              />
              <Route path='/profile' render={() =>
                <Profile onSaveProfile={onSaveProfile} profile={profile} />}
              />
              <Route path='/list' render={() =>
                <TodoContainer todos={todos} timeOfDay={timeOfDay} onAddDuration={onAddDuration} onSaveTodo={onSaveTodo} onNewTodo={onNewTodo} creatingTodo={creatingTodo} />}
              />
              <Route path='/dailytodos' render={() =>
                <DailyTodosContainer timeOfDay={timeOfDay} onGetNextWeekTodos={onGetNextWeekTodos} onGetLastWeekTodos={onGetLastWeekTodos} todos={todos} weekDays={weekDays} currentWeek={currentWeek} />}
              />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
const currentWeekSelector = createSelector(
  state => state.currentWeek,
  currentWeek => currentWeek
)
const timeOfDaySelector = createSelector(
  state => state.timeOfDay,
  timeOfDay => timeOfDay
)
const weekDaySelector = createSelector(
  state => state.weekDays,
  weekDays => weekDays
)
const todoSelector = createSelector(
  state => state.todos,
  todos => todos
)
const mapStateToProps = createSelector(
  todoSelector,
  timeOfDaySelector,
  currentWeekSelector,
  weekDaySelector,
  (todos, timeOfDay, currentWeek, weekDays) => ({ todos: todos,
    timeOfDay: timeOfDay,
    currentWeek: currentWeek,
    weekDays: weekDays })
)
const mapActionsToProps = {
  onNewTodo: newTodo,
  onSaveTodo: saveTodo,
  onLogin: login,
  onRegister: register,
  onSaveProfile: saveProfile,
  onAddDuration: addDuration,
  onGetNextWeekTodos: getNextWeekTodos,
  onGetLastWeekTodos: getLastWeekTodos
}
// const Guard = ({ redirectTo, condition, children }) => {
//   if (condition) {
//     return children
//   } else {
//     return <Redirect to={redirectTo} />
//   }
// }
export default connect(mapStateToProps, mapActionsToProps)(App)
