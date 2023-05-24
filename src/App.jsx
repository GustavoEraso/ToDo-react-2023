import React, { useEffect, useState } from 'react'
import{ ReactComponent as TrashImg} from './assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoDeletedList } from './components/ToDoDeletedList';
import { ToDoNewToDo } from './components/ToDoNewToDo';
import { ToDoAdd } from './components/ToDoAdd';
import { ToDoProvider } from './components/ToDoContext';

function App() {

  const [toggleTrash,setToggleTrash] = useState(false)

  function closeTrash(){
    setToggleTrash(false)
  }

  return (
    <ToDoProvider>        
        <section className='main-container'>       
        <ToDoTitle />
        <ToDoInput />
        <ToDoList />   
        
        {toggleTrash
          ?<ToDoDeletedList closeTrash={()=>closeTrash()}/>  
          :<span className='App__open-deleted-list' onClick={()=>setToggleTrash(!toggleTrash)}>
            <TrashImg fill="#f21e1e" alt="trash image for view trash button" />
          </span>      
        }
        <ToDoAdd/>
        {/* <ToDoNewToDo/> */}

        </section>
    </ToDoProvider>
   
  );
}

export {App};