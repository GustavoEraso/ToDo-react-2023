import { useEffect, useState } from 'react';
import '../styles/ToDoTitle.css'


function ToDoTitle({total, completed}){

    return total === completed 
        ?(<h1>Genial! ya no hay tareas</h1>)
        :(<h1 className="ToDoTitle"> Completaste {completed} de {total} tareas </h1>)
}

  

export {ToDoTitle}