import './App.css';
import {Escena} from './components/escena/Escena';
import {text} from './fakeApi/text';

function App() {
  return (
    <div className="App">
      <div>
        {text.map ((element)=> (
          <Escena text={element.text}/>
       ))}
      </div>
    </div>
  );
}

export default App;
