
import '../styles/ToDoInput.css'


function ToDoInput({searchValue, setSearchValue}){
 
    return(
        <input 
        className="ToDoInput" 
        type="text" 
        value={searchValue} 
        onChange={(event)=>{setSearchValue(event.target.value); console.log(event.target.value)}} 
        placeholder="Buscar Ej. tirar la basura" />
    )
}

export {ToDoInput}