import { Escena } from './components/escena/Escena';
import { text } from './fakeApi/text';
import { Botons } from './components/botons/Botons';
import {useState} from 'react';

function App() {

 
   const [textActive, setTextActive] = useState(1);
  const increment = () =>
    textActive !== text.length &&
    setTextActive ((textActive) => textActive + 1);
  const decrement = () =>
    textActive !== 1 && setTextActive((textActive) => textActive - 1);

  return (
    <div className='App'>
      
    <Botons increment={increment} decrement={decrement} />
      {text.map((element) => (
        <Escena
          key={element.id}
          text={element.text}
          isActive={element.id === textActive}
        />
      ))}
    </div>
  );
}
    

export default App;
