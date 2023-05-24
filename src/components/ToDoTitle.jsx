
import { useContext } from 'react'
import '../styles/ToDoTitle.css'
import { ToDoContext } from './ToDoContext'


function ToDoTitle(){
    
    const {completedTodosCounter, totalTodosCounter} = useContext(ToDoContext);    

    return totalTodosCounter === completedTodosCounter 
        ?(<h1 className="ToDoTitle">Genial! ya no hay tareas</h1>)
        :(<h1 className="ToDoTitle"> Completaste {completedTodosCounter} de {totalTodosCounter} tareas </h1>)
}

  

export {ToDoTitle}