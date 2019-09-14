import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <h2>Studio Ghibli Films</h2>
        <img src='' alt='' />
      </div>
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/films'>Films</NavLink>
        <NavLink to='/search'>Search</NavLink>
      </div>
    </div>
  );
};