import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Header = () => {
  return (
    <div className='header'>
      <Navbar >
        <Nav>
          <NavItem>
            <NavLink href="/"><div className='nav-items'>FINAL FANTASY TINDER</div></NavLink>
          </NavItem>
        </Nav>
        <Nav className="navbar" >
          <NavItem>
            <NavLink href="/finalfantasyindex"><div className='nav-items'>Index</div></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/finalfantasynew"><div className='nav-items'>New</div></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header
