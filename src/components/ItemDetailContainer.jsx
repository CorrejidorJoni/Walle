import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { pedirItemPorId } from './pedirDatos';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((resp) => {
                setItem(resp);
            });
    }, [id]);
    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;