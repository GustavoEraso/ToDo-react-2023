import { ToDoButton } from './ToDoButton'
import '../styles/Popupconfirmation.css'
import { useContext } from 'react'
import { ToDoContext } from './ToDoContext'


function PopupConfirmation(
    {
        question ,
        handleConfirmation, 
        handleCancel,
        cancelText,
        confirmText,
        onlyConfirm,
     }){
    const {settoggleNewTodoModal} = useContext(ToDoContext)
    
    const defaultHandleCancel = ()=>{             
        settoggleNewTodoModal(false)  }
    

    return(
        <section className="PopupConfirmation">
            {question.map((text, index)=><h3 key={`${text}-${index}`} className="PopupConfirmation__question">{text}</h3>)}
            
            <section className='PopupConfirmation__button-container'>
                {!onlyConfirm 
                ?<ToDoButton 
                type='cancel'
                handleClick={handleCancel || defaultHandleCancel}
                >{cancelText || 'Cancelar'}
                    </ToDoButton>
                    :null}
                    <ToDoButton
                        type= 'confirm'
                        handleClick={handleConfirmation}
                        >{confirmText || 'Confirmar'}
                    </ToDoButton>
            </section>

        </section>
    )

}

export {PopupConfirmation}