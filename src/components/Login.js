import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'

class Login extends Component {
  render () {
    return (
      <div className='container'>
        <h1>T(i)m(e) C(o)ntr(o)l(e)r</h1>
        <div className={this.props.loginError ? 'loginError' : ''} />
        <Label>Email:</Label>
        <Input placeholder='enter your email' />
        <Label>Password:</Label>
        <Input type='password' placeholder='enter your password' />
        <Button className='button'>Login</Button>
      </div>
    )
  }
}
export default Login
