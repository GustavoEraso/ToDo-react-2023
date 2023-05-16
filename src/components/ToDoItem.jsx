import '../styles/ToDoItem.css'

import deleteImg from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'


function ToDoItem({todo,onCompleted}){ 

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
          
           
      />
      <label className='ToDoItem__label-checkbox' htmlFor={todo.id}></label>
      <span className='ToDoItem__text'>{todo.text}</span>      
      <img className='ToDoItem__delete-img' src={deleteImg} alt={`Delete button for${todo.text}`} />
   </li>
 )
}

export {ToDoItem}