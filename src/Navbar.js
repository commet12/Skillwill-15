import React from 'react'
import {Link} from 'react-router-dom';
import About from './About';
import Main from './Main';



const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/About' >About </Link>
        <Link to='/Params'>Ted</Link>
    </nav>
  )
}

export default Navbar;