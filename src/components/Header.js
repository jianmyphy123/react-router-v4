import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
      <NavLink to="/about/expert" className="item" activeClassName="active">About</NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">Post</NavLink>
      <NavLink to="/me" className="item" activeClassName="active">My Page</NavLink>
      <NavLink to="/login" className="item" activeClassName="active">Login</NavLink>
      <NavLink to="/search" className="item" activeClassName="active">Search</NavLink>
    </div>
  );
}

export default Header;
