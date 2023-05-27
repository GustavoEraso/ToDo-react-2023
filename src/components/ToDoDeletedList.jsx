import '../styles/ToDoDeletedList.css'
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';

import {ReactComponent as ReturnImg} from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg'
import {ReactComponent as DeleteForEverImg} from '../assets/icons/delete_forever_FILL0_wght400_GRAD0_opsz48.svg'

import { useContext, useState } from 'react';
import { ToDoContext } from './ToDoContext';
import { ToDoModal } from './ToDoModal';
import { PopupConfirmation } from './PopupConfirmation';

function ToDoDeletedList({closeTrash}){

    const {deletedTodos, empyTrash} = useContext(ToDoContext)
    
    const[empyTrashState, setEmpyTrashState] = useState(false);
    
    const handleEmpyTrash = ()=>{
        setEmpyTrashState(true)       
    } 

    return(      
        <section className="ToDoDeletedList">
            <section className="ToDoDeletedList__head-section">
            <span className='ToDoDeletedList__return' onClick={closeTrash}><ReturnImg  alt="return to main button" /></span>
            <span className='ToDoDeletedList__delete-for-ever' onClick={handleEmpyTrash}><DeleteForEverImg fill="red" alt="delete for ever button" /></span>
            
            </section>
            <h3>Tareas Eliminadas:</h3>

            <section className='ToDoDeletedList__ul-container'>
                
               
            <ul className="ToDoDeletedList__ul">            
                {
                deletedTodos.length <= 0
                    ?<li>Papelera vacia</li>
                    :deletedTodos.map((todo)=>
                    <ToDoItem 
                    todo={todo}
                    key={todo.id}                    
                    disabled                    
                    />)}                   
            </ul>
                  
            </section>
            {!empyTrashState
            ?null
            :<ToDoModal>
                <PopupConfirmation
                question={['Desea eliminar permanetemente?' ,`"${deletedTodos.length} tareas"`]}
                handleConfirmation={()=>{empyTrash(); setEmpyTrashState(false)}}
                handleCancel={()=>setEmpyTrashState(false)}
                />
            </ToDoModal>  
          
      }    
        </section>
    )
}

export {ToDoDeletedList}