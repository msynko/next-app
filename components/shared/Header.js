import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">John Doe</a>
  </Link>

const LoginLink = () =>
  <Link href="/api/auth/login">
    <a  className="nav-link port-navbar-link">Login</a>
  </Link>

const LogoutLink = () =>
  <Link href="/api/auth/logout">
    <a className="nav-link port-navbar-link">Logout</a>
  </Link>

const Header = ({user, loading}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <BsNavBrand />
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
              <BsNavLink href="/only-admin" title="Admin"/>
            </NavItem>
  
          </Nav>
          <Nav navbar>
            { !loading &&
              <>
                { user &&
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                }
                { !user &&
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
