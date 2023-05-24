import '../styles/ToDoNewToDo.css'

import { useContext, useState } from 'react';

import { ReactComponent as ReturnImg } from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg';
import { ToDoContext } from './ToDoContext';


function ToDoNewToDo(){

  const {setToggleModal, createTodo }= useContext(ToDoContext)  
 
  const handleResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };
  
  const [textTitle, setTextTitle] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleAdd = ()=>{
    createTodo(
      {
      title:textTitle, 
      description:textareaValue
      })
      setToggleModal(false)

  }
    

    return(      
        <section className="ToDoNewToDo">
            <span className='ToDoNewToDo__return' onClick={()=>setToggleModal(false)}><ReturnImg alt="return to main button" /></span>
            <h3>Nueva tarea:</h3>
            <form action="">
                <label htmlFor="">Titulo:</label>
                <input 
                className='TodoNewToDo__title'
                placeholder='Ingresa una tarea'
                type="text"   
                name="" 
                id=""
                value={textTitle}
                onChange={(e)=>setTextTitle(e.target.value.toUpperCase())}                  
                />
                <label htmlFor="">Descripción:</label> 
                <textarea 
                  placeholder='Si lo crees necesario ingresa una descripcion'
                  name="" 
                  id="" 
                  cols="1" rows="4"
                  value={textareaValue}
                  onChange={(e)=>setTextareaValue(e.target.value)}
                  onInput={handleResize}
                  className="ToDoNewToDo__description"
                ></textarea>

                <input 
                  type="button" 
                  value="agregar" 
                  onClick={handleAdd}
                 />
            </form>

            
        </section>
    )
}

export {ToDoNewToDo}