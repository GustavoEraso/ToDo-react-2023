import '../styles/ToDoAdd.css'

import { ReactComponent as AddIcon } from '../assets/icons/add_FILL0_wght700_GRAD200_opsz48.svg'
import { useContext, useEffect, useState } from 'react'
import { ToDoContext } from './ToDoContext'




function ToDoAdd(){
    const {
        pendingTodosList,
        completedTodosList
    }= useContext(ToDoContext);

    const {completedTodosCounter, totalTodosCounter} = useContext(ToDoContext);
    
    const [isEmpy, setIsEmpy] =useState(totalTodosCounter === completedTodosCounter ) 
    useEffect(()=>{
        setIsEmpy(totalTodosCounter === 0 )
    },[completedTodosCounter, totalTodosCounter])
    
    console.log(isEmpy)


    const {toggleNewTodoModal, settoggleNewTodoModal} = useContext(ToDoContext)
    
    return(
        <span 
            className={isEmpy ?"ToDoAdd animated" : "ToDoAdd"} 
            onClick={()=>settoggleNewTodoModal(!toggleNewTodoModal)}>  
                <AddIcon alt="add button" className= 'ToDoAdd__img' />
            </span>   )
}

export {ToDoAdd}