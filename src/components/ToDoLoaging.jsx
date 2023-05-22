import '../styles/ToDoLoading.css'

function ToDoLoading(){
    return(
        <section className="ToDoLoading-main-container">
            <section>
                <h3>Tareas Pendientes:</h3>
                <ul className="ToDoLoading__ul">
                    <li className='ToDoLoadingItem'>
                        <span></span>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Tareas Completadas:</h3>
                <ul className="ToDoLoading__ul">
                    <li className='ToDoLoadingItem'>
                        <span></span>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export {ToDoLoading}