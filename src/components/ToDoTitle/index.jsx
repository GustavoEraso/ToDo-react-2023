// doc https://www.npmjs.com/package/react-confetti-explosion
import ConfettiExplosion from 'react-confetti-explosion'  


import { useContext } from 'react'
import './styles.css'
import { ToDoContext } from '../ToDoContext'


function ToDoTitle(){
    
    const {completedTodosCounter, totalTodosCounter, isExploding} = useContext(ToDoContext);    

    return totalTodosCounter === completedTodosCounter 
        ?(
        <section className='ToDoTitle__title-container'>
        <h1 className="ToDoTitle">Genial! ya no hay tareas</h1>
        {isExploding ?<ConfettiExplosion /> :null}        
        </section>
        )
        :(
        <section className='ToDoTitle__title-container'>
        <h1 className="ToDoTitle"> Completaste {completedTodosCounter} de {totalTodosCounter} tareas </h1>
        {isExploding ?<ConfettiExplosion /> :null}
        </section>
        )
}

  

export {ToDoTitle}