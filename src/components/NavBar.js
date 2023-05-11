import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <Link className='nav_link marca' to="/">Walle</Link>

                </div>
                <ul className='"nav_list'>
                    <li>
                        <Link className='nav_link' to="/productos">Catalogo</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to="/productos/Arnes">Arnes</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to="/productos/Pretal">Pretal</Link>
                    </li>
                    <li>
                        <Link className='nav_links' to="/productos/Collar">Collar</Link>
                    </li>
                    <li>
                        <Link className='nav_link' href="#"><CartWidget />0</Link>
                    </li>

                </ul>

            </nav>
            <hr></hr>
            
        </div>
        
        
        
        
    );
};

export default NavBar;