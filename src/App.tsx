/* eslint-disable */
import React from 'react';
import './App.css';
import CicloVidaClase from './components/ciclodevida/CicloVidaClase';
import CicloVidaFuncional from './components/ciclodevida/CicloVidaFuncional';
import Contador from './components/contador/Contador';
import ContadorClase from './components/contador/ContadorClase';
import DebugComponent from './components/debug/DebugComponent';
import CompPadre from './components/jerarquia/CompPadre';
import ComponenteClase from "./components/tipos/ComponenteClase"
import ComponenteFuncional from "./components/tipos/ComponenteFuncional"

const miElemento = <h1>Este es mi elemento</h1>
const miBoton = <button>Botón</button>


function App() {
  const mostrar = true
  return (
    <div className="App">
      {/* { miElemento } */}
      {/* { miBoton } */}
      {/* <ComponenteClase /> */}
      {/* <ComponenteFuncional /> */}
      {/* <CompPadre /> */}
      {/* <Contador valorInicial={5} /> */}
      {/* <ContadorClase /> */}
      {/* {mostrar && <CicloVidaClase />} */}
      {/* {mostrar && <CicloVidaFuncional />} */}
      <DebugComponent />
    </div>
  );
}

export default App;
