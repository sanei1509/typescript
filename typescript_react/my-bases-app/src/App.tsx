import React from "react";
import "./App.css";
import { Bienvenida } from "./componentes/Bienvenida";

function App() {
  return (
    <div className="App">
      <Bienvenida
        nombre="Clark"
        onClick={() => {
          alert("Hola");
        }}
      >
        Soy el texto hijo
      </Bienvenida>
    </div>
  );
}

export default App;
