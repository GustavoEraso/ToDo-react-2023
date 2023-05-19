import React, { useEffect, useState } from 'react'
import{ ReactComponent as TrashImg} from './assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoDeletedList } from './components/ToDoDeletedList';
import { ToDoNewToDo } from './components/ToDoNewToDo';
import { ToDoAdd } from './components/ToDoAdd';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos , setTodos]= useState([]);
  const [oldTodos, setOldTodos] = useState(todos) // lo uso como dependecia del useEffect

  const getToDos = ()=>{
    setLoading(true)
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
    console.log('paso por aca')   
    return JSON.parse(todosFromStorage);
   }

  useEffect(()=>{
    try {
      setError(false)
      // if (true) {throw new Error("");return}
      setTimeout( ()=>{
        const todosFromStorage = getToDos();
        console.log(todosFromStorage)
        setTodos(todosFromStorage || []); 
        setLoading(false)  
      }, 500)   
      
    } catch (error) {
      console.log('tuvimos un error') 
      setError(true) 
 
         
    }
    },[oldTodos])
  

   function resetTodos(newTodoList){    
    setTodos(newTodoList)
    setOldTodos(newTodoList)
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
          setSearchValue={setSearchValue}
      />
      <ToDoList todos={searchedTodos} resetTodos={resetTodos} loading={loading} error={error}/>   
      
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