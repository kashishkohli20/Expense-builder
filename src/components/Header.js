import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    </div>
  );
};

export default Header;