/* eslint-disable */
import React from 'react';
import './App.css';
import Contador from './components/contador/Contador';
import ContadorClase from './components/contador/ContadorClase';
import CompPadre from './components/jerarquia/CompPadre';
import ComponenteClase from "./components/tipos/ComponenteClase"
import ComponenteFuncional from "./components/tipos/ComponenteFuncional"

const miElemento = <h1>Este es mi elemento</h1>
const miBoton = <button>Botón</button>

function App() {
  return (
    <div className="App">
      {/* { miElemento } */}
      {/* { miBoton } */}
      {/* <ComponenteClase /> */}
      {/* <ComponenteFuncional /> */}
      {/* <CompPadre /> */}
      <Contador valorInicial={5} />
      <ContadorClase />
    </div>
  );
}

export default App;
