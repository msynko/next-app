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

const BsNavLink = ({ href, title}) => {
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginBTn = () => {
    return (
        <span className="nav-link port-navbar-link clickable">
            Login
        </span>
      )
}

const LogoutBTn = () => {
    return (
        <span className="nav-link port-navbar-link clickable">
            Logout
        </span>
      )
}
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
            </Nav>
            <Nav className="clickable" navbar >
            <NavItem className="port-navbar-item">
                <LoginBTn/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <LogoutBTn/>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
