import React, { useState } from 'react'
import{ ReactComponent as TrashImg} from './assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoDeletedList } from './components/ToDoDeletedList';
import { ToDoNewToDo } from './components/ToDoNewToDo';
import { ToDoAdd } from './components/ToDoAdd';

function App() {
  const [todos , setTodos]= useState(()=>{
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
    if (todosFromStorage) return JSON.parse(todosFromStorage)
    return []
  });

   function resetTodos(newTodoList){    
    setTodos(newTodoList)
    localStorage.removeItem('TODOS_V1')
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodoList))
  }

  const [searchValue , setSearchValue] = useState('');
  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)});

  const completedTodos = todos.filter((todo)=>todo.status === 'completed').length;
  const totalTodos = todos.filter((todo)=> todo.status !== 'deleted').length;

  const [toggleTrash,setToggleTrash] = useState(false)

  function closeTrash(){
    setToggleTrash(false)
  }

  return (
    
    <main>
      <section className='main-container'>
      <ToDoTitle completed={completedTodos} total={totalTodos} />
      <ToDoInput 
          searchValue={searchValue}
          setSearchValue={setSearchValue}/>
      <ToDoList todos={searchedTodos} resetTodos={resetTodos}/>   
      
      {toggleTrash
        ?<ToDoDeletedList todos={todos} resetTodos={resetTodos} closeTrash={()=>closeTrash()}/>  
        :<span className='App__open-deleted-list' onClick={()=>setToggleTrash(!toggleTrash)}>
          <TrashImg fill="#f21e1e" alt="trash image for view trash button" />
        </span>      
      }
      <ToDoAdd/>
      {/* <ToDoNewToDo/> */}

      </section>
      
    </main>
  );
}

export {App};