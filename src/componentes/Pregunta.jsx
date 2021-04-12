import React,{ Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0) ; 
    const [error, guardarError] = useState(false)


    //SUBMIT PARA DEFINIR el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault() ;

    // VALIDAR 
    if(cantidad < 1 || cantidad == isNaN) {
        guardarError(true) ;

        return ;
    }
    //SI SE PASA LA VALIDACIÓN

    guardarError(false) ;
    guardarPresupuesto(cantidad) ;
    guardarRestante(cantidad)   ;
    actualizarPregunta(false)

    }

    

    


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error    ? <Error mensaje='Datos enviados Invalidos'/>     : null }

            <form onSubmit={(agregarPresupuesto)} >
                <input 
                    type="number"
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={e =>{  guardarCantidad( parseInt( e.target.value , 10) )  }  }
                />

                <input 
                    type="submit"
                    className='u-full-width'
                    value='Definir Presupuesto'
                />

            </form>
        </Fragment>
        
    );
}
 
export default Pregunta;