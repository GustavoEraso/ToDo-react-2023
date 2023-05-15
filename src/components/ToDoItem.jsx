import '../styles/ToDoItem.css'

import deleteImg from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'
import { useState } from 'react'


function ToDoItem({todo, resetTodos, onCompleted}){ 

  
  
  const [checked , setChecked] = useState(todo.completed);

 
  
  function update(target){
    console.log('target 1: ' + target.checked)
    setChecked(target.checked);
    console.log('target2: ' + target.checked)
    const newTodo = {...todo, completed: checked};
    console.log('cheked:' + checked)
    resetTodos(newTodo)

  }
  
  
 return(
    <li className='ToDoItem' key={todo.id}>
      <input 
          className='ToDoItem__checkbox' 
          type="checkbox" 
          name= {todo.id}
          checked={todo.completed} 
          id={todo.id} 
          // onChange={(event)=> update(event.target)}
          onChange={onCompleted}        
          
           
      />
      <label className='ToDoItem__label-checkbox' htmlFor={todo.id}></label>
      <span className='ToDoItem__text'>{todo.text}</span>
      <img className='ToDoItem__delete-img' src={deleteImg} alt={`Delete button for${todo.text}`} />
   </li>
 )
}

export {ToDoItem}