import '../styles/ToDoItem.css'

import {ReactComponent as DeleteImg} from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'
import {ReactComponent as RestoreImg} from '../assets/icons/restore_from_trash_FILL0_wght400_GRAD0_opsz48.svg'

function ToDoItem({
  todo,
  onCompleted, 
  onDeleted,
  onRestore, 
  disabled ,
}){ 

  // const fecha= new Date(todo.endingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return(
    <li className='ToDoItem' key={todo.id}>
      <input 
          className='ToDoItem__checkbox' 
          type="checkbox" 
          name= {todo.id}
          checked={todo.completed} 
          id={todo.id} 
          onChange={onCompleted}
          disabled = {disabled} 
           
      />
      <label className='ToDoItem__label-checkbox' htmlFor={todo.id}></label>
      <span className='ToDoItem__text'>{todo.text}</span> 

      {todo.status === 'deleted'
          ?<RestoreImg 
            fill="#1ef25e"
            className='ToDoItem__restore-img'            
            alt={`Delete button for ${todo.text}`}
            onClick={onRestore}
                    
          />
          :<DeleteImg 
          fill="#f21e1e"
          className='ToDoItem__delete-img' 
          alt={`Delete button for ${todo.text}`}
          onClick={onDeleted}
          />
          

      }     
   </li>
 )
}

export {ToDoItem}