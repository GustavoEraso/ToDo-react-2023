import '../styles/ToDoItemDetail.css'

import { useContext, useState} from 'react';

import { ReactComponent as ReturnImg } from '../assets/icons/reply_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as EditImg } from '../assets/icons/edit_note_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as ExpandImg } from '../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import { ToDoModal } from './ToDoModal';
import { PopupConfirmation } from './PopupConfirmation';

import { ToDoContext } from './ToDoContext';
import { ToDoButton } from './ToDoButton';

function ToDoItemDetail(){
  const {    
    currentTodo, 
    setToggleItemDetailModal,
    translate,
    transformDate,
    editTodo,
  }= useContext(ToDoContext)

  const [viewDetails, setViewDetails] = useState(false);

  const[wantEditConfirmation , setWantEditConfirmation]= useState(false)
  const[wantEdit , setWantEdit]= useState(false)
  const[editConfirmation , setEditConfirmation]= useState(false)

  const[todoTitle, setTodoTitle] = useState(currentTodo.title);
  const[todoDescription, setTodoDescription] = useState(currentTodo.description);

  const handleCancelEdit = ()=>{
    setTodoTitle(currentTodo.title)
    setTodoDescription(currentTodo.description)
    setWantEdit(false)
  }
  const handleComfirmEdit = ()=>{
    setEditConfirmation(true)
  }
 



    return( 
      <>     
        <section className="ToDoItemDetail">
          <section className="ToDoItemDetail__head-section">
            <span className='ToDoItemDetail__return' 
            onClick={()=>setToggleItemDetailModal(false)}>
                <ReturnImg alt="return to main button" />
            </span>
            { currentTodo.status === 'pending'
                ?wantEdit ?<h3>Editando...</h3> :<EditImg onClick={()=>setWantEditConfirmation(true)} />
                :null
            }
          </section>
            <h3>Tarea:</h3>
            <form className='ToDoItemDetail__form' action="" onSubmit={(event)=>{event.preventDefault();}} >
                <input 
                className='ToDoItemDetail__title-box'                
                type="text"                 
                value={todoTitle}
                onChange={(e)=>setTodoTitle(()=>e.target.value)}

                disabled ={!wantEdit}                             
                />
                <label>Descripción:</label> 
                <textarea                   
                  placeholder='Sin descripción '                  
                  cols="1" rows="4"
                  value={todoDescription}   
                  onChange={(e)=>setTodoDescription(()=>e.target.value)}               
                  className="ToDoItemDetail__description"
                  disabled = {!wantEdit}
                ></textarea>
                <ExpandImg
                  className={!viewDetails ?'ToDoItemDetail__expand-img' :'ToDoItemDetail__expand-img rotate' } 
                  onClick={()=>setViewDetails(!viewDetails)}/>
                {!viewDetails
                  ?null
                  :<>
                  {/* <label>ID: </label>
                  <input type="text" name="" id="" disabled value={currentTodo.id} /> */}
                  <label>Estado: </label>
                  <input type="text" name="" id="" disabled value={translate(currentTodo.status)} />
                  <label>Creación: </label>
                  <input type="text" name="" id="" disabled value={transformDate(currentTodo.startDate)} />
                  <label>Finalizado: </label>
                  <input type="text" name="" id="" disabled 
                    value={!currentTodo.endingDate 
                            ? currentTodo.status !== 'deleted' ?translate(currentTodo.status) :'Cancelado' 
                            :transformDate(currentTodo.endingDate)} />
                  </>
                }
                {!wantEdit
                  ?null
                  :<section className='ToDoItemDetail__confirm-edit-container'>
                    <ToDoButton 
                      type='cancel'
                      handleClick={handleCancelEdit}>
                      Cancelar
                    </ToDoButton>
                    <ToDoButton type='confirm'
                    handleClick={handleComfirmEdit}>
                      Aplicar
                    </ToDoButton>
                  </section>
                }
            </form>
        </section>

      {!wantEditConfirmation
      ?null
      :<ToDoModal>
        <PopupConfirmation
        question={['Quieres editar la tarea:', currentTodo.title]}   
        handleCancel={()=>setWantEditConfirmation(false)}   
        handleConfirmation={()=>
          {setWantEdit(true);
           setWantEditConfirmation(false);
          }} 
        />
      </ToDoModal>}

      {!editConfirmation
      ?null
      :<ToDoModal>
        <PopupConfirmation
        question={['Quieres aplicar cambios?']}   
        handleCancel={()=>setEditConfirmation(false)}   
        handleConfirmation={()=>
          {
            editTodo({
              id:currentTodo.id,
              newTitle:todoTitle,
              newDescription: todoDescription,
            })
           setEditConfirmation(false);
           setWantEditConfirmation(false)
           setWantEdit(false);
          }} 
        />
      </ToDoModal>}

      </>
    )
}

export {ToDoItemDetail}