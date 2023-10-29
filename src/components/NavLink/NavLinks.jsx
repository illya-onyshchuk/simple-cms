import React from 'react';
import { Link } from 'react-router-dom';
import { tabs } from '../../testdb/tabs';
import cl from './NavLink.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavLinks = () => {
  return (
    <Navbar expand='lg' bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          {[...tabs]
          .sort((a,b) => a.order - b.order)
          .map(tab => (
             <Link
               key={tab.id}
               to={`/${tab.id}`}
               className={cl.navbar__link}
              >
              {tab.title}
             </Link>
          ))}
        </Nav>
      </Container>
   </Navbar>
  );
}

export default NavLinks;
