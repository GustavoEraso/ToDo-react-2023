import { ToDoItem } from "./ToDoItem"
import '../styles/ToDoList.css'


function ToDoList({todos , resetTodos, error, loading}){

    const pendingTodos = todos.filter((todo)=>todo.status ==='pending' ).sort((a,b)=> a.startDate - b.startDate);
    const completedTodos = todos.filter((todo)=>todo.status ==='completed').sort((a,b)=> b.endingDate - a.endingDate);
    
    const completedTodo = (id)=>{
        const actuallyDate = new Date().getTime();       
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
        newTodos[todoIndex].status = newTodos[todoIndex].status === 'pending' ? 'completed' : 'pending';
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        newTodos[todoIndex].endingDate = actuallyDate
        resetTodos(newTodos)
    }
    const deletedTodo = (id)=>{
        const actuallyDate = new Date().getTime();       
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
        newTodos[todoIndex].status = 'deleted';
        newTodos[todoIndex].deleted = {state:true, date:actuallyDate};
        resetTodos(newTodos)
    }

   
    if(loading){return(<p>estamos cargando tus tareas</p>)};
    if(error) return(<p>vaya algo salio mal</p>)  
    if(!todos.length) return(<p>no tines tareas</p>)  
    if(todos.length > 0) return(
         <section className="ToDoList-main-container">
        {pendingTodos.length < 1
            ? null         
            :<section>
                <h3>Tareas Pendientes:</h3>           
                <ul className="ToDoList__ul">            
                    {pendingTodos.length === 0 
                        ? <li><h5>Bien! no hay tareas pendientes</h5></li> 
                        : pendingTodos.map((todo)=>
                            <ToDoItem 
                            todo={todo}
                            key={todo.id} 
                            onCompleted = {()=>completedTodo(todo.id)}
                            onDeleted = {()=>deletedTodo(todo.id)}
                
                            />)
                    }
                </ul>      
            </section>
        }
        {completedTodos.length < 1
            ? null         
            :<section>
                <h3>Tareas Completadas:</h3>
                <ul className="ToDoList__ul">            
                    {completedTodos.map((todo)=>
                        <ToDoItem 
                        todo={todo}
                        key={todo.id} 
                        onCompleted = {()=>completedTodo(todo.id)}
                        onDeleted = {()=>deletedTodo(todo.id)}                    
                        />)}                   
                </ul>
             </section>
        }       
    </section>
    )
}

export { ToDoList}