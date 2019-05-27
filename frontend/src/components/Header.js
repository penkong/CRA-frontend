import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="pa4">Mazdak Nazemi</h1>
    <div className="pa4 mr1">
    < NavLink className="w-10 link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1"
      to="/"
      activeClassName="is-active" exact={true}>Home
    </NavLink>
    <NavLink className="w-10 link tc ph3 pv1 db bg-animate bg-blue hover-bg-blue white f6 br1" 
      to="/portfolio" 
      activeClassName="is-active" exact={true}>Portfolio
    </NavLink>
    <NavLink className="w-10 link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" 
      to="/contact" 
      activeClassName="is-active">Contact
    </NavLink>
    </div>
  </header>
);

export default Header;
