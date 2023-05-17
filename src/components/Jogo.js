import React, { useState } from "react";
import palavras from "../palavras";

const img_hangman = [
  "/img/forca0.png",
  "/img/forca1.png",
  "/img/forca2.png",
  "/img/forca3.png",
  "/img/forca4.png",
  "/img/forca5.png",
  "/img/forca6.png",
];

export default function Jogo() {
  return (
    <div className="jogo-main">
      <HangMan />
      <JogoInput />
    </div>
  );
}

function HangMan() {
  return (
    <div className="jogo-hangman">
      <img src={img_hangman[0]} alt="Hangman" />
    </div>
  );
}

function JogoInput() {
  const [selectedWord, setSelectedWord] = useState(palavras[0]);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    const randomWord = palavras[randomIndex];
    setSelectedWord(randomWord);
  };

  const renderLines = (word) => {
    if (!word) return null;

    return word.split("").map((letter, index) => (
      <div key={index} className="underscore"></div>
    ));
  };

  return (
    
    <div className="jogo-input">
      <button onLoad={chooseRandomWord} onClick={chooseRandomWord}>Escolher Palavra</button>
      {selectedWord && <div>Selected Word: {selectedWord}</div>}
      <div className="container-underscores">{renderLines(selectedWord)}</div>
    </div>
  );
}