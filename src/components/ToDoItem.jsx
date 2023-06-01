// doc https://www.npmjs.com/package/react-confetti-explosion
import ConfettiExplosion from 'react-confetti-explosion'  

import '../styles/ToDoItem.css'

import { useContext, useEffect, useState } from 'react'
import { ToDoContext } from './ToDoContext'
import { PopupConfirmation } from './PopupConfirmation'
import { ToDoModal } from './ToDoModal'

import {ReactComponent as DeleteImg} from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'
import {ReactComponent as RestoreImg} from '../assets/icons/restore_from_trash_FILL0_wght400_GRAD0_opsz48.svg'


function ToDoItem({
  todo, 
  disabled,
}){ 
  
  
  const {
    completedTodo,
    restoreTodo,
    deleteTodo,
    currentTodo, 
    setCurrentTodo,
    setToggleItemDetailModal,
  }= useContext(ToDoContext)

  // const fecha= new Date(todo.endingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  const [deleteState, setDeleteState] = useState(false)
  const [restoreState, setRestoreState] = useState(false)
  
  const[deleting, setDeleting]= useState('') 
  
  
  function handleDelete(todo){
    
    setCurrentTodo(todo)
    setDeleteState(true)    
  }
  function handleRestore(todo){
    setCurrentTodo(todo)
    setRestoreState(true)    
  }

  const[explodingControl, setIsExplodingControl] = useState(false)
  const [isExploding, setIsExploding] = useState(false);

useEffect(()=>{

 if( todo.completed && todo.status === 'completed'){
   setIsExploding(true)
 } 

},[explodingControl])

const handleExploding = ()=>{
  setIsExplodingControl(!explodingControl)
}

return(
<>
    <li className={!deleting ?'ToDoItem' :'ToDoItem deleting'} key={todo.id}>
      <input 
          className='ToDoItem__checkbox' 
          type="checkbox" 
          name= {todo.id}
          checked={todo.completed} 
          id={todo.id} 
          onChange={()=>{    
            handleExploding()
            completedTodo(todo.id);           
          }}
          disabled = {disabled} 
          
          />
      <label 
      className='ToDoItem__label-checkbox' 
      htmlFor={todo.id}
      >
        {isExploding ?<ConfettiExplosion /> :null}
      </label>
      <span 
      className='ToDoItem__text'
      onClick={()=>
      {
        setToggleItemDetailModal(true);
        setCurrentTodo(todo);
      }}>
        {todo.title}
      </span> 

      {todo.status === 'deleted'
          ?<RestoreImg 
            fill="#1ef25e"
            className='ToDoItem__restore-img'            
            alt={`Delete button for ${todo.text}`}
            onClick={()=>handleRestore(todo)}
                    
          />
          :<DeleteImg 
          fill="#f21e1e"
          className='ToDoItem__delete-img' 
          alt={`Delete button for ${todo.text}`}
          onClick={()=>handleDelete(todo)}     />

      } 

   </li>
      {!deleteState
          ?null
          :<ToDoModal>
            <PopupConfirmation
            question={["Desea enviar a la papelera" ,`"${currentTodo.title}"`]}
            handleConfirmation={()=>{
              setDeleting(true);
              setDeleteState(false);
              setTimeout(()=>{deleteTodo(currentTodo.id)}, 500)}}
            handleCancel={()=>setDeleteState(false)}
            />
          </ToDoModal>  
      }    
      {!restoreState
          ?null
          :<ToDoModal>
            <PopupConfirmation
            question={['Desea restaurar ',`"${currentTodo.title}"`]}
            handleConfirmation={()=>restoreTodo(currentTodo.id)}
            handleCancel={()=>setRestoreState(false)}
            />
          </ToDoModal>  
      }    
  </>
 )
}

export {ToDoItem}