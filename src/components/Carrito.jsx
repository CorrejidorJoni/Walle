import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';





const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

   const vaciar= () => {
        vaciarCarrito();
    }
    
    return (
        <div className='container carrito'>
            <h1 >Carrito</h1>
            
            {
                carrito.map((prod) => (
                <div key={prod.id}>    
                <h3>{prod.title}</h3>
                <img src={prod.image} alt="" />
                <p>Precio unitario: ${prod.price}</p>
                <p>Precio total: ${prod.price * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                </div>
                
                ))
                
            }
             
            {
             carrito.length > 0 ?
            <> 
             <h2>Total Compra: ${precioTotal()}</h2>
             
            <button className='botoncart' onClick={vaciar}>Vaciar carrito </button>
            <button className='botoncart'>Comprar</button>
            </> :
            <h2 >El carrito se encuentra vacío</h2>
            }
        </div>
    )
}

export default Carrito;