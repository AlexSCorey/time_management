import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser, apiRequest, saveTodo } from './actions/user-actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
    this.onSaveTodo = this.onSaveTodo.bind(this)
  }
  onUpdateUser (event) {
    this.props.onUpdateUser(event.target.value)
  }
  onSaveTodo (event) {
    event.preventDefault()
    console.log(event.target.value)
    this.props.onSaveTodo(event.target.value)
  }
  render () {
    return (
      <div className='App'>
        <form>
          <label>Add new To do item</label>
          <input onChange={this.onUpdateUser} />
          <button type='submit' onClick={this.onSaveTodo}>Save</button>
        </form>
        <div>
          {console.log(this.props.todo)}
          {this.props.todo.map((todo) =>
            <div key={Math.random()}>{todo.todo}</div>
          )}
        </div>
      </div>
    )
  }
}
const productSelector = createSelector(
  state => state.products,
  products => products
)
const userSelector = createSelector(
  state => state.user,
  user => user
)
const todoSelector = createSelector(
  state => state.todo,
  todo => todo
)
const mapStateToProps = createSelector(
  productSelector,
  userSelector,
  todoSelector,
  (product, user, todo) => ({
    product,
    user,
    todo
  })
)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
  onSaveTodo: saveTodo
}

export default connect(mapStateToProps, mapActionsToProps)(App)
