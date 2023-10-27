import React from 'react';
import { Link } from 'react-router-dom';
import cl from './NavLink.module.css'

const NavLinks = () => {
  return (
    <div className={cl.links}>
      <Link className={cl.link} to='/dummyTable'>Table</Link>
      <Link className={cl.link} to='/dummyList'>List</Link>
      <Link className={cl.link} to='/dummyChart'>Chart</Link>
    </div>
  );
}

export default NavLinks;
