

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div  className="bordes">
                    <img src={producto.image} alt={producto.title} />
                    <h2>{producto.title}</h2>
                    
                    
                    <Link className="vermas" to={`/item/${producto.id}`}>Ver mas</Link>
        </div> 
    );
};

export default Item