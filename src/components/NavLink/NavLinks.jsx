import React from 'react';
import { NavLink } from 'react-router-dom';
import { tabs } from '../../testdb/tabs';
import cl from './NavLinks.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavLinks = () => {

  return (
    <Navbar expand='lg' bg="light" data-bs-theme="light">
      <Container>
        <Nav className={cl.navbar}>
          {[...tabs]
          .sort((a,b) => a.order - b.order)
          .map(tab => (
             <NavLink
               key={tab.id}
               to={`/${tab.id}`}
               className={({isActive}) =>  isActive ? cl.active__link : ''}
              >
              {tab.title}
             </NavLink>
          ))}
        </Nav>
      </Container>
   </Navbar>
  );
}

export default NavLinks;
