import { Escena } from "./components/escena/Escena";
import { text } from "./fakeApi/text";
import { Botons } from "./components/botons/Botons";
import { useState } from "react";
import { Benvinguda } from "./components/benvinguda/Benvinguda";

function App() {
  const [inici, setInici] = useState(true);
  const start = () => setInici(false);

  const [textActive, setTextActive] = useState(1);
  const increment = () =>
    textActive !== text.length && setTextActive((textActive) => textActive + 1);
  const decrement = () =>
    textActive !== 1 && setTextActive((textActive) => textActive - 1);

  return (
    <div>
      {inici ? (
        <>
          <Benvinguda start={start} />
        </>
      ) : (
        <>
          <Botons increment={increment} decrement={decrement} />
          <Escena text={text} textActive={textActive} />
        </>
      )}
    </div>
  );
}

export default App;
