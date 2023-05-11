const ItemDetail = ( {item} ) => {
    return (
      <div className="container">
          <div className="producto-detalle">
              <img src={item.image} alt={item.title} />
              <div>
                  <h3 className="titulo">{item.title}</h3>
                  <p className="descripcion">{item.description}</p>
                  <p className="categoria">Categoría: {item.category}</p>
                  <p className="precio">Precio: ${item.price}</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default ItemDetail