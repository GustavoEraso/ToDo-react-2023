import '../styles/ToDoNewToDo.css'
import { ToDoButton } from './ToDoButton';

import { useContext, useState } from 'react';

import { ReactComponent as ReturnImg } from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg';
import { ToDoContext } from './ToDoContext';


function ToDoNewToDo(){

  const {settoggleNewTodoModal, createTodo }= useContext(ToDoContext)  
 
  const handleResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };
  
  const [textTitle, setTextTitle] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleAdd = ()=>{
    if(textTitle !== ''){
      createTodo(
        {
          title:textTitle, 
        description:textareaValue
        })
      settoggleNewTodoModal(false)}
  }
  const handleCancel = ()=>{
    settoggleNewTodoModal(false)
    
  }
    

    return(      
        <section className="ToDoNewToDo">
            <span className='ToDoNewToDo__return' onClick={()=>handleCancel()}><ReturnImg alt="return to main button" /></span>
            <h3>Nueva tarea:</h3>
            <form className='ToDoNewToDo__form' action="" onSubmit={(event)=>{event.preventDefault();}} >
                <input 
                className='TodoNewToDo__title-box'
                placeholder='Ingresa una tarea'
                type="text"                 
                value={textTitle}
                onChange={(e)=>setTextTitle(e.target.value.toUpperCase())}                  
                />
                <label>Descripción:</label> 
                <textarea                   
                  placeholder='Ingresa una descripcion si lo crees necesario'                  
                  cols="1" rows="4"
                  value={textareaValue}
                  onChange={(e)=>setTextareaValue(e.target.value)}
                  onInput={handleResize}
                  className="ToDoNewToDo__description"
                ></textarea>

                <ToDoButton 
                  type= 'cancel'
                  handleClick={handleCancel}>
                   Cancelar
                </ToDoButton>                  
                <ToDoButton 
                  type= 'confirm'
                  handleClick={handleAdd}>
                   Agregar
                </ToDoButton>                  
                  
               
            </form>

            
        </section>
    )
}

export {ToDoNewToDo}