import { ToDoItem } from "./ToDoItem"
import '../styles/ToDoList.css'

function ToDoList(){
    return(
        <ul className="ToDoList__ul">
           <ToDoItem text={'comprar pan'} index={1}/> 
           <ToDoItem text={'comprar pan'} index={2}/> 
           <ToDoItem text={'comprar pan'} index={3}/> 
           <ToDoItem text={'comprar pan'} index={4}/> 
           <ToDoItem text={'comprar pan'} index={5}/> 
           
        </ul>
    )
}

export { ToDoList}