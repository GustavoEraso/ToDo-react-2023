import '../styles/ToDoItemDetail.css'

import { useContext} from 'react';

import { ReactComponent as ReturnImg } from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg';
import { ToDoContext } from './ToDoContext';


function ToDoItemDetail(){

  const {    
    currentTodo, 
    setToggleItemDetailModal}= useContext(ToDoContext)

    return(      
        <section className="ToDoItemDetail">
            <span className='ToDoItemDetail__return' onClick={()=>setToggleItemDetailModal(false)}><ReturnImg alt="return to main button" /></span>
            <h3>Detalles:</h3>
            <form className='ToDoItemDetail__form' action="" onSubmit={(event)=>{event.preventDefault();}} >
                <input 
                className='ToDoItemDetail__title-box'                
                type="text"                 
                value={currentTodo.title} 
                disabled                               
                />
                <label>Descripción:</label> 
                <textarea                   
                  placeholder='Sin descripción '                  
                  cols="1" rows="4"
                  value={currentTodo.description}                  
                  className="ToDoItemDetail__description"
                  disabled
                ></textarea>

            
                  
               
            </form>

            
        </section>
    )
}

export {ToDoItemDetail}