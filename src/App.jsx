import React, {  useState } from 'react'
import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoAdd } from './components/ToDoAdd';


function App() {
  const defautlTodos = [
    {
      text: ' 1 comprar Pan',
      completed: true,
      id: 'sjfnlf',
      startDate:1684200223000,
      endingDate:null,
    },
    {
      text: '2 tirar basura',
      completed: true,
      id: 'kjsdbEGD',
      startDate:1684200224000,
      endingDate:null,
    },
    {
      text: '3 Pintar casa',
      completed: true,
      id: 'ksdfuiw',
      startDate:1684200225000,
      endingDate:null,
    },
    {
      text: '4 Terminar el curso',
      completed: false,
      id: 'leruhfioearfoh',
      startDate:1684200226000,
      endingDate:null,
    },
  ];

  const [todos , setTodos]= useState(defautlTodos);

   function resetTodos(newTodoList){    
    setTodos(newTodoList)
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
