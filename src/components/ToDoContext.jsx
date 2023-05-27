import React, { createContext, useEffect, useState} from "react"

const ToDoContext = createContext(); 

function ToDoProvider ({children}){
   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos , setTodos]= useState([]);
  const [oldTodos, setOldTodos] = useState(todos) // lo uso como dependecia del useEffect 
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleTrash,setToggleTrash] = useState(false);
  
  const deletedTodos = todos.filter((todo)=>todo.status ==='deleted').sort((a,b)=> b.endingDate - a.endingDate);

    const getToDos = ()=>{
    setLoading(true)
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
      
    return JSON.parse(todosFromStorage);
   }

  useEffect(()=>{
    try {
      setError(false)         
      // if (true) {throw new Error("");return}
      setTimeout( ()=>{
        const todosFromStorage = getToDos();
        
        setTodos(todosFromStorage || []); 
        setLoading(false)  
      }, 2000)   
      
    } catch (error) {
      setLoading(false)
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
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)});

  const completedTodosCounter = todos.filter((todo)=>todo.status === 'completed').length;
  const totalTodosCounter = todos.filter((todo)=> todo.status !== 'deleted').length;

  const pendingTodosList = searchedTodos.filter((todo)=>todo.status ==='pending' ).sort((a,b)=> a.startDate - b.startDate);
  const completedTodosList = searchedTodos.filter((todo)=>todo.status ==='completed').sort((a,b)=> b.endingDate - a.endingDate);

  const createTodo = (
    { title = '', description = ''} = {})=> {

    const newTodo = {
      status: 'pending',
      title,
      description,
      completed: false,
      id:`ID${new Date().getTime()}`,
      startDate: new Date().getTime(),
      endingDate: null,
      deleted: {
        state: false,
        date: null
      }
    };

    const newTodoList = [newTodo,...todos];

    resetTodos(newTodoList)

  };
  
 


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

const deleteTodo = (id)=>{
    const actuallyDate = new Date().getTime();       
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
    newTodos[todoIndex].status = 'deleted';
    newTodos[todoIndex].deleted = {state:true, date:actuallyDate};
    resetTodos(newTodos)
}

const empyTrash=()=>{
    const newTodoList = todos.filter((todo)=> todo.status !== 'deleted')
    resetTodos(newTodoList)
}

 
 
   
  return(
        <ToDoContext.Provider value={{
            completedTodosCounter,
            totalTodosCounter,
            todos,
            createTodo, 
            resetTodos, 
            error, 
            loading,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodo,
            restoreTodo,
            deleteTodo,
            deletedTodos,
            empyTrash,
            completedTodosList,
            pendingTodosList,
            toggleModal,
            setToggleModal,
            toggleTrash,
            setToggleTrash,
        }}>
            {children}

        </ToDoContext.Provider>


    )
}

export{ToDoContext, ToDoProvider}