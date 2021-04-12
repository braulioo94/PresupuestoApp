import React,{useState} from 'react' ;
import Error from './Error' ;
import shortid from 'shortid' ;


const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombreGasto, guardarNombreGasto] = useState('') ;
    const [cantidadGasto, guardarCantidadGasto] = useState(0) ;
    const [error, guardarError] = useState(false)

    //CUANDO EL USUARIO HACER SUBMIT, AGREGA UNA GASTO
    const agregarGasto = e => {
        e.preventDefault( ) ;

    //VALIDAR
        if(nombreGasto.trim().length == 0 || cantidadGasto < 1 || isNaN(cantidadGasto) ){
            guardarError(true)
            return
        }

        guardarError(false)   
    // CONSTRUIR EL GASTO

    const gasto ={
        nombreGasto,
        cantidadGasto,
        id: shortid.generate()
    }
    console.log(gasto)


    //PASAR EL GASTO AL COMPONENTE PRINCIPAL
    guardarGasto(gasto)
    guardarCrearGasto(true)

    //RESETEAR EL FORM
    guardarNombreGasto('');
    guardarCantidadGasto(0)


    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aca</h2>
            {error ? (<Error mensaje='No se envio la informacion solicitada'/>)    :   null}
            
            <div className="campo">
                <label > Nombre del gasto</label>  
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='Ej. Transport'
                    value={nombreGasto}
                    onChange={e => guardarNombreGasto(e.target.value)}
                    />  
            </div>

            <div className="campo">
                <label > Cantidad Gasto</label>  
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={cantidadGasto}
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value), 10)}
                    />  
            </div>

            <input 
            type="submit"
            className='button-primary u-full-width'
            value='Agregar Gasto'
            />

        </form>
        
        );
}
 
export default Formulario;