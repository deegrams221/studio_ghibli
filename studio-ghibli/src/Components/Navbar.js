import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <h2>Studio Ghibli Films</h2>
        <img src='' alt='' />
      </div>
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/films'>Films</NavLink>
        <NavLink to='/SearchForm'>Search</NavLink>
      </div>
    </div>
  );
};

export default Navbar;