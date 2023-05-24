
import { useContext } from 'react';
import '../styles/ToDoInput.css'
import { ToDoContext } from './ToDoContext';


function ToDoInput(){

    const{searchValue, setSearchValue} = useContext(ToDoContext);
 
    return(
        <input 
        className="ToDoInput" 
        type="text" 
        value={searchValue} 
        onChange={(event)=>{setSearchValue(event.target.value)}} 
        placeholder="Buscar Ej. tirar la basura" />
    )
}

export {ToDoInput}