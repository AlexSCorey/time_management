import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
      <div>
        <div className={this.props.loginError ? 'loginError' : ''} />
        <label>Email:<input placeholder='enter your email' /></label>
        <label>Password:<input type='password' placeholder='enter your password' /></label>
      </div>
    )
  }
}
export default Login
