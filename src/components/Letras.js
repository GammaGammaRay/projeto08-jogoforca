import React from "react"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras() {
  const firstHalf = alfabeto.slice(0, Math.ceil(alfabeto.length / 2));
  const secondHalf = alfabeto.slice(Math.ceil(alfabeto.length / 2));

  return (
    <div className="container-letras">
      <div className="letras-row">
        {firstHalf.map(letter => (
          <Letra key={letter} letter={letter} />
        ))}
      </div>
      <div className="letras-row">
        {secondHalf.map(letter => (
          <Letra key={letter} letter={letter} />
        ))}
      </div>
    </div>
  )
}

function Letra({ letter }) {
  return <div className="letra pressed"><span>{letter}</span></div>
}