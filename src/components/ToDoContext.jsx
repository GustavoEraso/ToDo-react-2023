import React, { createContext, useEffect, useState} from "react"

const ToDoContext = createContext(); 

function ToDoProvider ({children}){
   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos , setTodos]= useState([]);
  const[currentTodo, setCurrentTodo] = useState({})
  const [toggleNewTodoModal, settoggleNewTodoModal] = useState(false);
  const [toggleItemDetailModal, setToggleItemDetailModal] = useState(false);
  const [toggleTrash,setToggleTrash] = useState(false);
  const [oldTodos, setOldTodos] = useState(todos) // lo uso como dependecia del useEffect 
  
  const translate = (text)=>{  
    const dic = {
      completed : 'Completado',
      pending: 'Pendiente',
      deleted: 'Eliminado'
    }
  const toReturn = dic[text] || text
  return toReturn
}
const transformDate = (date)=>{
  return new Date(date).toLocaleTimeString([], {day: '2-digit',month: '2-digit',year: '2-digit',hour: '2-digit', minute: '2-digit'})
}
  
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
     
        const todosFromStorage = getToDos();
        
        setTodos(todosFromStorage || []); 
        
        setLoading(false)  
        
      
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
const editTodo = ({id, newTitle, newDescription})=>{        
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.id === id)
    newTodos[todoIndex].title = newTitle;
    newTodos[todoIndex].description = newDescription;
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
            currentTodo, 
            setCurrentTodo,
            createTodo, 
            resetTodos, 
            error, 
            loading,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodo,
            restoreTodo,
            editTodo,
            deleteTodo,
            deletedTodos,
            empyTrash,
            completedTodosList,
            pendingTodosList,
            toggleNewTodoModal,
            settoggleNewTodoModal,
            toggleItemDetailModal, 
            setToggleItemDetailModal,
            toggleTrash,
            setToggleTrash,
            translate,
            transformDate,
        }}>
            {children}

        </ToDoContext.Provider>


    )
}

export{ToDoContext, ToDoProvider}