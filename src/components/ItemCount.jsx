import React from 'react';

const ItemCount = ({cantidad, restar, sumar, agregar}) => {

   

    return (
        <div>
            <div className='item-count'>
                <button onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className='agregarcarro' onClick={agregar} >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;