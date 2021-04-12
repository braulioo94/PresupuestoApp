import React,{useState,Fragment,useEffect} from 'react' ;
import Pregunta from './componentes/Pregunta' ;
import Formulario from './componentes/Formulario' ;
import Listado from './componentes/Listado' ;
import ControlPresupuesto from './componentes/ControlPresupuesto' ;

function App() {

  //DEFINE ESTADOS
  const [presupuesto, guardarPresupuesto] = useState(0) ;
  const [restante, guardarRestante] = useState(0) ;
  const [mostrarPregunta, actualizarPregunta] = useState(true) ;
  const [gastos, guardarGastos] = useState([]) ;
  const [gasto, guardarGasto] = useState({})  ;
  const [crearGasto, guardarCrearGasto] = useState(false) ;
  
  //USE EFFECT QUE ACTUALIZA EL RESTANTE
    useEffect(() => {
      
      if(crearGasto) {
        
        //AGREGA EL NUEVO PRESUPUESTO

        guardarGastos([
        ...gastos, gasto
      ]);

        //RESTA DEL PRESUPUESTO ACTUAL
        const presupuestoRestante = restante - gasto.cantidadGasto ;
        guardarRestante(presupuestoRestante)

      //RESETEA EL FALSE
        guardarCrearGasto(false)
    }

    }, [gasto])
  
  
  
  
  

  return (
  <Fragment>
    <div className="Container">
        <header>
            
            <h1> Gasto Semanal</h1>
            
            <div className='contenido-principal contenido'> 
            {mostrarPregunta
            ? 
              (< Pregunta 
                guardarPresupuesto={guardarPresupuesto} 
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
                />
                 )
            :
              (<div className='row'>
                <div className='one-half column'>
                  <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>

                <div className='one-half column'>
                  <Listado 
                  gastos={gastos}
                  />

                  <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                  />



                </div> 
                </div> )}
              
            
            

            

              
            </div>
        </header>

  </div>
  </Fragment> 

  );
}

export default App;
