import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Typed from 'react-typed';
import { useUser } from '@auth0/nextjs-auth0';

const BsNavLink = ({ href, title}) => {
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginBTn = () => {
    return (
      <a className="nav-link port-navbar-link" href="/api/auth/login" >Login</a>
      )
}

const LogoutBTn = () => {
    return (
      <a className="nav-link port-navbar-link" href="/api/auth/logout" >Logout</a>
      )
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <div>
          <Link href="/">
            <a className="port-navbar-brand">John Doe</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
                <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="About"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <BsNavLink href="/portfolios" title="Portfolios"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <BsNavLink href="/blogs" title="Blogs"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink href="/secret" title="secret"/>
                </NavItem>
            </Nav>
          <Nav className="clickable" navbar >
            { !isLoading &&
              <>
                {
                  user &&
                  <NavItem className="port-navbar-item">
                    <LogoutBTn />
                  </NavItem>
                }
                {
                  !user && 
                    <NavItem className="port-navbar-item">
                      <LoginBTn/>
                    </NavItem>
                }
              </> }
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
