import '../styles/ToDoAdd.css'

import { ReactComponent as AddIcon } from '../assets/icons/add_FILL0_wght700_GRAD200_opsz48.svg'
import { useContext } from 'react'
import { ToDoContext } from './ToDoContext'

function ToDoAdd(){
    const {toggleModal, setToggleModal} = useContext(ToDoContext)
    
    return(
        <span className="ToDoAdd"onClick={()=>setToggleModal(!toggleModal)} ><AddIcon alt="add button" className= 'ToDoAdd__img' /></span>   )
}

export {ToDoAdd}