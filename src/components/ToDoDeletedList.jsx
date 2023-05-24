import '../styles/ToDoDeletedList.css'
import { ToDoItem } from './ToDoItem';

import {ReactComponent as ReturnImg} from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg'

import { useContext } from 'react';
import { ToDoContext } from './ToDoContext';

function ToDoDeletedList({closeTrash}){

    const {deletedTodos} = useContext(ToDoContext)    

    return(      
        <section className="ToDoDeletedList">
            <span className='ToDoDeletedList__return' onClick={closeTrash}><ReturnImg  alt="return to main button" /></span>
            <h3>Tareas Eliminadas:</h3>
            <ul className="ToDoDeletedList__ul">            
                {deletedTodos.map((todo)=>
                    <ToDoItem 
                    todo={todo}
                    key={todo.id}                    
                    disabled                    
                    />)}                   
            </ul>
        </section>
    )
}

export {ToDoDeletedList}