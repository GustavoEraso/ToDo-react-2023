import React from 'react'
import { createPortal } from 'react-dom'

import '../styles/ToDoModal.css'

function ToDoModal({children}){

    return createPortal(
        <div className='ModalBackgroud'>
            {children}
        </div>,document.getElementById('modal')
    )

}

export {ToDoModal}