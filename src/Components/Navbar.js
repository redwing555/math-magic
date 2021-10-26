import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Math magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
