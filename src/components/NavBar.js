import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        
      





        <nav class="navbar ">
        <div class="container-fluid ">
            
        <ul className='flexnav'>
        <li class="nav-item">
            <Link className='nav-link marca' to="/">Walle</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link "  to="/productos">Catálogo</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/productos/Arnes">Arnes</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/productos/Pretal">Pretal</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/productos/Collar">Collar</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/contacto">Contacto</Link>
        </li>
        <li class=" nav-item ">
            <CartWidget />
        </li>
      </ul>
    
  </div>
</nav>
            
    )};         
            
       

export default NavBar;