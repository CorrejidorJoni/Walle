import React, { useEffect, useState } from 'react';

import  pedirProductos  from './pedirProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const category = useParams().category;
    
    

    useEffect(()=>{
        pedirProductos()
        .then( (resp) => {
            if(category) {
               setProductos(resp.filter((prod) => prod.category === category));
            } else {
                setProductos(resp);
            }
            
            
            
        })
    }, [category])
    
    return (
        <div>
             <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;