import {useForm} from "react-hook-form";


const Contacto = () => {


const {register, handleSubmit} = useForm();

const enviar = (data) => {
    console.log(data);
}

    return (
        
        
        <div className='container'>
            <h1>Contacto</h1>
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