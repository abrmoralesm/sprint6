import { useState } from "react";
import { Escena } from "./components/Escena/Escena";
import { text } from "./fakeApi/text";
import { Botons } from "./components/Botons/Botons";
import { Benvinguda } from "./components/Benvinguda/Benvinguda";
import { BackEscenaImg } from "./components/BackImg/BackEscenaImg";

function App() {
  const [inici, setInici] = useState(true);
  const start = () => setInici(false);

  const [textActive, setTextActive] = useState(1);
  const increment = () =>
    textActive !== text.length && setTextActive((textActive) => textActive + 1);
  const decrement = () =>
    textActive !== 1 && setTextActive((textActive) => textActive - 1);

  return (
    <div className="App">
      {inici ? (
        <>
          <Benvinguda start={start} />
        </>
      ) : (
        <>
          <BackEscenaImg text={text} textActive={textActive} />
          <Botons increment={increment} decrement={decrement} />
          <Escena text={text} textActive={textActive} />
        </>
      )}
    </div>
  );
}

export default App;
