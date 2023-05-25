import { ToDoButton } from './ToDoButton'
import '../styles/Popupconfirmation.css'
import { useContext } from 'react'
import { ToDoContext } from './ToDoContext'


function PopupConfirmation({question ,handleConfirmation}){
    const {setToggleModal} = useContext(ToDoContext)
    
    const handleCancel = ()=>{
        console.log('adkafb')       
        setToggleModal(false) 
      }

    return(
        <section className="PopupConfirmation">
            <h3 className="PopupConfirmation__question">{question}</h3>
            <ToDoButton 
            type='cancel'
            handleClick={handleCancel}
                >Cancelar
            </ToDoButton>
            <ToDoButton
                type= 'confirm'
                handleClick={handleConfirmation}
                >Confirmar
            </ToDoButton>

        </section>
    )

}

export {PopupConfirmation}