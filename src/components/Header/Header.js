import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link className='navbar-Link' to='/home'>Home</Link>
        <Link className='navbar-Link' to='/reviews'>Reviews</Link>
        <Link className='navbar-Link' to='/dashboard'>Dashboard</Link>
        <Link className='navbar-Link' to='/blogs'>Blogs</Link>
        <Link className='navbar-Link' to='/about'>About</Link>
      </nav>

    </div>
  );
};

export default Header;