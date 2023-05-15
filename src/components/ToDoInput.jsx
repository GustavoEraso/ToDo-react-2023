import React, { useState } from 'react'

import '../styles/ToDoInput.css'


function ToDoInput({searchValue, setSearchValue}){
    // const [search , setSearch] = useState('');
    // console.log(search);
    return(
        <input 
        className="ToDoInput" 
        type="text" 
        value={searchValue} 
        onChange={(event)=>setSearchValue(event.target.value)} 
        placeholder="Buscar Ej. tirar la basura" />
    )
}

export {ToDoInput}