import '../styles/ToDoTitle.css'

function ToDoTitle({total, completed}){
    return(
        <h1 className="ToDoTitle"> {completed} tareas completadas de {total} </h1>
    )
}

export {ToDoTitle}