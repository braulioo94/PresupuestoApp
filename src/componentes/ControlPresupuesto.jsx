import React,{Fragment} from 'react'
import { revisarPresupuesto } from '../helpers'
 

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className ='alert alert-primary'>
               <p>Presupuesto: $ {presupuesto}</p> 
            </div>

            <div className={revisarPresupuesto( presupuesto, restante )}>
                <p>Restante: $ {restante}</p> 
            </div>


        </Fragment>
        
      );
}
 
export default ControlPresupuesto;