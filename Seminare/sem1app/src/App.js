import './App.css';
import './components/Greeting'
import Greeting from './components/Greeting';
import NewComponents from './components/NewComponents';
import CurrentTime from './components/CurrentTime';
import EvenCard from './components/EvenCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <NewComponents />
        <div>       
          <EvenCard title="Мега группа" date ="1 ноября 2024 г., 20:00" location="Москва, Лужники" />
          <EvenCard title="Выставка" date ="5 декабря 2024 г., 12:00" location="Москва, ДК 'Текстильщики'" />
          <EvenCard title="Новогодняя ёлка" date ="29 декабря 2024 г., 18:00" location="Москва, Кремль" propsBoolean="false"/>
        </div>
      </header>
    </div>
  );
}

export default App;
