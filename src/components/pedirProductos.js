import data from "./data/productos.json"

const pedirProductos = () => {
    return new Promise ((resolve) => {
        resolve (data)
    })
}

export default pedirProductos;