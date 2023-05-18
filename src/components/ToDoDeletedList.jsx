import '../styles/ToDoDeletedList.css'
import { ToDoItem } from './ToDoItem';


import returnImg from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg'

function ToDoDeletedList({todos, resetTodos,closeTrash}){

    const deletedTodos = todos.filter((todo)=>todo.status ==='deleted').sort((a,b)=> b.endingDate - a.endingDate);

    const completedTodo = (id)=>{
        const actuallyDate = new Date().getTime();       
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
        newTodos[todoIndex].status = newTodos[todoIndex].status === 'pending' ? 'completed' : 'pending';
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        newTodos[todoIndex].endingDate = actuallyDate
        resetTodos(newTodos)
    }

    const restoreTodo = (id)=>{        
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
        newTodos[todoIndex].status = newTodos[todoIndex].completed ?'completed' :'pending';
        newTodos[todoIndex].deleted = {state:false, date:null};
        resetTodos(newTodos)
    }

    return(      
        <section className="ToDoDeletedList">
            <span className='ToDoDeletedList__return' onClick={closeTrash}><img src={returnImg} alt="return to main button" /></span>
            <h3>Tareas Eliminadas:</h3>
            <ul className="ToDoDeletedList__ul">            
                {deletedTodos.map((todo)=>
                    <ToDoItem 
                    todo={todo}
                    key={todo.id} 
                    onCompleted = {()=>completedTodo(todo.id)}
                    onRestore = {()=>restoreTodo(todo.id)} 
                    disabled                    
                    />)}                   
            </ul>
        </section>
    )
}

export {ToDoDeletedList}