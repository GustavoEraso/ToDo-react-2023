import '../styles/ToDoAdd.css'

import { ReactComponent as AddIcon } from '../assets/icons/add_FILL0_wght700_GRAD200_opsz48.svg'
import { useContext, useEffect, useState } from 'react'
import { ToDoContext } from './ToDoContext'




function ToDoAdd({big}){
    
    const {
        totalTodosCounter, 
        toggleNewTodoModal, 
        settoggleNewTodoModal,
    } = useContext(ToDoContext);
    
    const [isEmpy, setIsEmpy] =useState(false ) 

    useEffect(()=>{
        setIsEmpy(totalTodosCounter === 0 )
    },[totalTodosCounter])
    

    return(
        <span 
            className={isEmpy ?"ToDoAdd animated" : "ToDoAdd"} 
            onClick={()=>settoggleNewTodoModal(!toggleNewTodoModal)}>  
                <AddIcon alt="add button" className= 'ToDoAdd__img' />
            </span>   )
}

export {ToDoAdd}