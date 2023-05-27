import React, { useContext, useEffect, useState } from 'react'
import{ ReactComponent as TrashImg} from './assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg'

import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoDeletedList } from './components/ToDoDeletedList';
import { ToDoNewToDo } from './components/ToDoNewToDo';
import { ToDoAdd } from './components/ToDoAdd';
import { ToDoModal } from './components/ToDoModal';
import {PopupConfirmation} from './components/PopupConfirmation'
import { ToDoContext, ToDoProvider } from './components/ToDoContext';


function App() {
  
  
 function prueba(){
  console.log('funcion de prueba')
 }
  function closeTrash(){
    setToggleTrash(false)
  }
  const {toggleModal, toggleTrash, setToggleTrash} = useContext(ToDoContext); 
  
  return (            
        <section className='main-container'>       
        <ToDoTitle />
        <ToDoInput />
        <ToDoList />   
        
        {toggleTrash
          ?<ToDoModal>
             <ToDoDeletedList closeTrash={()=>closeTrash()}/>           
           </ToDoModal> 
          :null}
          <span className='App__open-deleted-list' onClick={()=>setToggleTrash(!toggleTrash)}>
            <TrashImg fill="#f21e1e" alt="trash image for view trash button" />
          </span>      
        <ToDoAdd/>
       {toggleModal 
          ? <ToDoModal>
              <ToDoNewToDo/>
            </ToDoModal> 
          : null}          

        </section>   
   
  );
}

export {App};