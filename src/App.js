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
    this.props.onSaveTodo()
  }
  render () {
    return (
      <div className='App'>

        <input onChange={this.onUpdateUser} />
        <button type='submit' onClick={this.onSaveTodo} >Save</button>
        {this.props.user}
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
const mapStateToProps = createSelector(
  productSelector,
  userSelector,
  (product, user) => ({
    product,
    user
  })
)

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
  onSaveTodo: saveTodo
}

export default connect(mapStateToProps, mapActionsToProps)(App)
