import '../styles/ToDoNewToDo.css'

import { useContext, useState } from 'react';

import { ReactComponent as ReturnImg } from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg';
import { ToDoContext } from './ToDoContext';


function ToDoNewToDo(){

  const {setToggleModal}= useContext(ToDoContext)

    const [textareaValue, setTextareaValue] = useState('');

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

    

    return(      
        <section className="ToDoNewToDo">
            <span className='ToDoNewToDo__return' onClick={()=>setToggleModal(false)}><ReturnImg alt="return to main button" /></span>
            <h3>Nueva tarea:</h3>
            <form action="">
                <label htmlFor="">Titulo</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Descripción</label> 
                <textarea name="" id="" cols="1" rows="4"
                    value={textareaValue}
                    onChange={handleChange}
                    onInput={handleResize}
                    className="ToDoNewToDo__description"
                ></textarea>

                <input type="button" value="agregar" />
            </form>

            
        </section>
    )
}

export {ToDoNewToDo}