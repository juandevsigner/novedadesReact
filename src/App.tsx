import { Boton, Modal } from "./components";
import { ContextProvider } from "./context/ContexProvider";

function App() {
  return (
    <ContextProvider>
      <div>
        <Modal />
        <Boton />
      </div>
    </ContextProvider>
  );
}

export default App;
