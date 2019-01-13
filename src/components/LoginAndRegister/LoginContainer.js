import React, { Component } from 'react'

import Login from './Login'
import Register from './Register'

class LoginContainer extends Component {
  render () {
    let { onLogin, onRegiser } = this.props
    if (this.props.registering) {
      return (
        <div>
          <Register onRegister={onRegiser} />
        </div>)
    } else {
      return (
        <div>
          <Login onLogin={onLogin} />
        </div>)
    }
  }
}
export default LoginContainer
