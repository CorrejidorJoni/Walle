import {useForm} from "react-hook-form";
import React from 'react';


const Contacto = () => {


const {register, handleSubmit} = useForm();

const enviar = (data) => {
    console.log(data);
}

    return (
        
        
        <div className='container containerForm '>
            <h1 className="titcontacto">Contacto</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
            
            <input type='text' placeholder='Ingresá tu nombre' {...register("nombre")}/>
            <input type='email' placeholder='Ingresá tu Email' {...register("email")} />
            <input type='text' placeholder='Mensaje' {...register("mensaje")}/>
            <button type='submit' className='enviar'>Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;