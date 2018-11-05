import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'

class Register extends Component {
  render () {
    return (
      <div>
        <div className={this.props.loginError ? 'loginError' : ''} />
        <Label>Email:<Input placeholder='enter your email' /></Label>
        <Label>Password:<Input type='password' placeholder='enter your password' /></Label>
        <Label>Password:<Input type='password' placeholder='confirm your password' /></Label>
        <Button>Register</Button>
      </div>
    )
  }
}
export default Register
