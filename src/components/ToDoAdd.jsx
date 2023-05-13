import '../styles/ToDoAdd.css'

import addIcon from '../assets/icons/add_FILL0_wght700_GRAD200_opsz48.svg'

function ToDoAdd(){
    return(
        <button className="ToDoAdd"><img src={addIcon} alt="add button" /></button>
    )
}

export {ToDoAdd}