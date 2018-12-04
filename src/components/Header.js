import React, { Component } from 'react'
import { Navbar, NavbarItem } from 'bloomer'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <Navbar className='headerNavbar'>
          <NavbarItem><Link to='/list'>Home</Link></NavbarItem>
          <NavbarItem><Link to='/profile'>Profile</Link></NavbarItem>
          <NavbarItem><Link to='/dailytodos'>Today's Todos</Link></NavbarItem>
          <NavbarItem><Link to='/'>Logout</Link></NavbarItem>
        </Navbar>
      </div>
    )
  }
}
export default Header
