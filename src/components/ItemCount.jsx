

const ItemCount = ({cantidad, restar, sumar}) => {

   

    return (
        <div>
            <div className='item-count'>
                <button onClick={restar}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className='agregarcarro' >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;