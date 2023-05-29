import { ToDoItem } from "./ToDoItem"
import { ToDoLoading } from "./ToDoLoaging";
import { ToDoContext } from "./ToDoContext";
import '../styles/ToDoList.css'
import { useContext } from "react";



function ToDoList(){
    const {todos, completedTodosList, pendingTodosList, searchedTodos, error, loading} = useContext(ToDoContext);
    

    if(loading){
        return(<ToDoLoading />)};
    if(error) 
        return(<p>vaya algo salio mal</p>)  
    if(!pendingTodosList.length && !completedTodosList.length) 
        return(<></>)  
    if(searchedTodos.length > 0) 
        return(
         <section className="ToDoList-main-container">
            
            {pendingTodosList.length < 1
                ? null         
                :<section>
                    <h3>Tareas Pendientes:</h3>           
                    <ul className="ToDoList__ul">            
                        {pendingTodosList.length === 0 
                            ? <li><h5>Bien! no hay tareas pendientes</h5></li> 
                            : pendingTodosList.map((todo)=>
                                <ToDoItem 
                                todo={todo}
                                key={todo.id}
                                />)
                        }
                    </ul>      
                </section>
            }   
            {completedTodosList.length < 1
                ? null         
                :<section>
                    <h3>Tareas Completadas:</h3>
                    <ul className="ToDoList__ul">            
                        {completedTodosList.map((todo)=>
                            <ToDoItem 
                            todo={todo}
                            key={todo.id}                                          
                            />)}                   
                    </ul>
                </section>
              }  
                  
         </section>
    )
}

export { ToDoList}