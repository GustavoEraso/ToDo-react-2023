
import '../styles/ToDoButton.css'

function ToDoButton({type=false, handleClick , children}){

    const typeButton = {
        cancel : 'ToDoButton--cancel',
        confirm : 'ToDoButton--confirm',
    }
    return(
        <span
            onSubmit={(e)=>e.preventDefault()}
            className={`ToDoButton ${type ?typeButton?.[type] :''}`}
            onClick={()=>handleClick()}
            >
                <span>
                    {children}
                </span>
        </span>
    )
}

export {ToDoButton}