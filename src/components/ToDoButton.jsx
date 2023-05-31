
import '../styles/ToDoButton.css'

function ToDoButton({type=false, handleClick , children}){

    const typeButton = {
        cancel : 'ToDoButton--cancel',
        confirm : 'ToDoButton--confirm',
    }
    return(
        <input
        className={`ToDoButton ${type ?typeButton?.[type] :''}`} 
        type="button" 
        value={children}
        onClick={()=>handleClick()}
        />
        
    )
}

export {ToDoButton}