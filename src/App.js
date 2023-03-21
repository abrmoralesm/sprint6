import './App.css';
import {Escena} from './components/escena/Escena';
import {text} from './fakeApi/text';
function App() {
  return (
    <div className="App">
      
       
         {text.map ((element)=> (
          <Escena text={element.text}/>
       )  )}
       
    </div>
  );
}

export default App;
