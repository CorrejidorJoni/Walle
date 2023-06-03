import { useState } from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState (1);

    const restar = () => {
        cantidad  > 1 && setCantidad(cantidad -1)
    }

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad +1)
    }

    return (
      <div className="container">
          <div className="producto-detalle">
              <img src={item.image} alt={item.title} />
              <div>
                  <h3 className="titulo">{item.title}</h3>
                  <p className="descripcion">{item.description}</p>
                  <p className="categoria">Categoría: {item.category}</p>
                  <p className="precio">Precio: ${item.price}</p>
                  <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} />
              </div>
          </div>
      </div>
    )
  }
  
  export default ItemDetail