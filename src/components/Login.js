import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'

class Login extends Component {
  render () {
    return (
      <div>
        <div className={this.props.loginError ? 'loginError' : ''} />
        <Label>Email:<Input placeholder='enter your email' /></Label>
        <Label>Password:<Input type='password' placeholder='enter your password' /></Label>
        <Button>Login</Button>
      </div>
    )
  }
}
export default Login
