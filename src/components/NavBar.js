import React from 'react';
import CartWidget from './CartWidget';



const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav_brand'>
                    <a className='nav_link marca' href="#">Walle</a>

                </div>
                <ul className='"nav_list'>
                <li>
                        <a className='nav_link' href="#">Nosotros</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#">Productos</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#">Contacto</a>
                    </li>
                    <li>
                        <a className='nav_link' href="#"><CartWidget /> 0</a>
                    </li>

                </ul>

            </nav>
            <hr></hr>
        </div>
        
        
        
    );
};

export default NavBar;