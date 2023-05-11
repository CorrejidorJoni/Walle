

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div  >
                    <img src={producto.image} alt={producto.title} />
                    <h2>{producto.title}</h2>
                    <p>{producto.category}</p>
                    <p>{producto.description}</p>
                    <Link className="vermas" to={`/item/${producto.id}`}>Ver mas</Link>
        </div> 
    );
};

export default Item