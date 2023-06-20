import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);
    return (
        
            <li>
                <Link className='nav_link letracarrito' to="/carrito">
                    Carrito de compras 🛒
                    <span > {cantidadEnCarrito()}</span>
                    </Link>
                
            </li>
        
    );
};

export default CartWidget;