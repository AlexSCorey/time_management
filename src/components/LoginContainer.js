import React, { Component } from 'react'

import Login from './Login'
import Register from './Register'

class LoginContainer extends Component {
  render () {
    let {}
    if(this.props.registering){
      return (
        <div>
          <Register />
        </div>)
    } else{
     return (
      <div>
        <Login />
      </div>)
    }
  }
}
export default LoginContainer
