
import { useContext } from 'react';
import './styles.css';
import { ToDoContext } from '../ToDoContext';

import { ReactComponent as SerachIcon } from './search_FILL0_wght400_GRAD0_opsz48.svg';


function ToDoInput(){

    const{searchValue, setSearchValue} = useContext(ToDoContext);
 
    return(
        <section className='ToDoInput__container'>
            <input 
            className="ToDoInput__input" 
            name='ToDoInput__input'
            type="text" 
            value={searchValue} 
            onChange={(event)=>{setSearchValue(event.target.value)}} 
            placeholder="Buscar Ej. tirar la basura" />
            <label className='ToDoItem__label' htmlFor="ToDoInput__input">
                <SerachIcon />
            </label>
        </section>
    )
}

export {ToDoInput}