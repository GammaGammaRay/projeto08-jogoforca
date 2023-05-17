import React from "react"
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import logo from './logo.svg';

import './App.css';

export default function App() {
  return (
    <div className="App">
        <Jogo />
        <Letras />
      <div className="container-wordInput">

      </div>
    </div>
  );
}
