import '../styles/ToDoItem.css'

import deleteImg from '../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'
function ToDoItem({text , completed , index}){
 return(
    <li className='ToDoItem' key={`${text}${index}`}>
      <input className='ToDoItem__checkbox' type="checkbox" name="check-completed" id={`id${index}`} />
      <label className='ToDoItem__label-checkbox' htmlFor={`id${index}`}></label>
      <span className='ToDoItem__text'>{text}</span>
      <img className='ToDoItem__delete-img' src={deleteImg} alt={`Delete button for${text}`} />
   </li>
 )
}

export {ToDoItem}