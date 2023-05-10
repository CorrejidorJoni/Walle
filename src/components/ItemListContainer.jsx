import React, { useEffect, useState } from 'react';

import  pedirProductos  from './pedirProductos';
import ItemList from './ItemList';



const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    
    
    

    useEffect(()=>{
        pedirProductos()
        .then( (resp) => {
            setProductos(resp);
            
        })
    }, [])
    
    return (
        <div>
             <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;