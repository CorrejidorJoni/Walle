

const ItemList = ({productos}) => {
    return (
        <div className='flex'>
            {
              productos.length > 0 && 

              productos.map((producto) => {
                return (
                <div key={producto.id} >
                    <img src={producto.image} alt={producto.title} />
                    <h2>{producto.title}</h2>
                    
                </div> 
                )
              })
            
            }
        </div>
    );
};

export default ItemList;