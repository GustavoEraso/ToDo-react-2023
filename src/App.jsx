import logo from './platzi.webp';
import './styles/App.css';
import { ToDoTitle } from './components/ToDoTitle';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import { ToDoAdd } from './components/ToDoAdd';

function App() {
  return (
    <main>
      <section className='main-container'>
      <ToDoTitle completed={16} total={24} />
      <ToDoInput />
      <ToDoList />   
      <ToDoAdd />
      </section>
      
    </main>
  );
}

export default App;
