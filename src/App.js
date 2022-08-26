import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='wrapper'>
      <div className='wrapper_mobil'>
        <div className='heading'>
          <h1>Your daily task</h1>
        </div>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
