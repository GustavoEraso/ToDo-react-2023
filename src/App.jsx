import React, { useEffect, useState } from 'react'
import logo from './platzi.webp';
import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoAdd } from './components/ToDoAdd';


function App() {
  const defautlTodos = [
    {
      text: 'comprar Pan',
      completed: true,
      id: 'sjfnlf'
    },
    {
      text: 'tirar basura',
      completed: true,
      id: 'kjsdbEGD'
    },
    {
      text: 'Pintar casa',
      completed: true,
      id: 'ksdfuiw'
    },
    {
      text: 'Terminar el curso',
      completed: false,
      id: 'leruhfioearfoh'
    },
  ];

  const [todos , setTodos]= useState(defautlTodos);

   function resetTodos(newTodo){
    setTodos(newTodo)
  }
  const [searchValue , setSearchValue] = useState('');



  const completedTodos = todos.filter((todo)=>todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)});




  return (
    <main>
      <section className='main-container'>
      <ToDoTitle completed={completedTodos} total={totalTodos} />
      <ToDoInput 
          searchValue={searchValue}
          setSearchValue={setSearchValue}/>
      <ToDoList todos={searchedTodos} resetTodos={resetTodos}/>   
      <ToDoAdd />
      </section>
      
    </main>
  );
}

export {App};
