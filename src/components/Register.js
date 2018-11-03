import React from 'react'

export const Register = (
  <div>
    <div className={this.props.loginError ? 'loginError' : ''} />
    <label>Email:<input placeholder='enter your email' /></label>
    <label>Password:<input type='password' placeholder='enter your password' /></label>
    <label>Password:<input type='password' placeholder='confirm your password' /></label>
  </div>
)
