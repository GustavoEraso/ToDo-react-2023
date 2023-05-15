import { ToDoItem } from "./ToDoItem"
import '../styles/ToDoList.css'
import { useState } from "react";

function ToDoList({todos , resetTodos }){

    const pendingTodos = todos.filter((todo)=>!todo.completed);
    const completedTodos = todos.filter((todo)=>todo.completed);

   

    const completedTodo = (id)=>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo)=> todo.id == id)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
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