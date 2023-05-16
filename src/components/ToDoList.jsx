import { ToDoItem } from "./ToDoItem"
import '../styles/ToDoList.css'


function ToDoList({todos , resetTodos }){

    const pendingTodos = todos.filter((todo)=>!todo.completed).sort((a,b)=> a.startDate - b.startDate);
    const completedTodos = todos.filter((todo)=>todo.completed).sort((a,b)=> b.endingDate - a.endingDate);
    
   

    const completedTodo = (id)=>{
        const actuallyDate = new Date().getTime();       
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        newTodos[todoIndex].endingDate = actuallyDate
        resetTodos(newTodos)
    }

   
    return(
        <ul className="ToDoList__ul">            
            {pendingTodos.map((todo)=>
                <ToDoItem 
                    todo={todo}
                    key={todo.id} 
                    onCompleted = {()=>completedTodo(todo.id)}
                   
                />)}
                     
            {completedTodos.map((todo)=>
                <ToDoItem 
                    todo={todo}
                    key={todo.id} 
                    onCompleted = {()=>completedTodo(todo.id)}
                    
                    />)}
                     
           
        </ul>
    )
}

export { ToDoList}