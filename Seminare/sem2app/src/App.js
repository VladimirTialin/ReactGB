
import './App.css';
import Counter from "./components/Counter";
import TextInput from './components/TextInput';
import TodoList from './components/ToDoList';
import TimerCounter from './components/TimerCounter';
import CurrentTime from './components/CurrentTime';

 function App() {
  return (
    <div>
      <Counter />
      <TextInput/>
      <TodoList/>
      <TimerCounter />
      <CurrentTime />
    </div>

  );
}

export default App;
